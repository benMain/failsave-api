const { exec } = require("child_process");

const { runDeployment, runDeploymentStep } = require('@aws-serverless-tools/cli');

runDeployment(async ({ fileSystem, npm, cfn }) => {
  await runDeploymentStep({
    stepName: 'Clearing artifacts',
    action: () => fileSystem.delete('cfn/artifacts.zip'),
  });

  await runDeploymentStep({
    stepName: 'Running clean NPM install',
    action: () => npm.cleanInstall(),
  });

  await runDeploymentStep({
    stepName: 'Running lint',
    action: () => npm.runScript('lint'),
  });

  await runDeploymentStep({
    stepName: 'Running build',
    action: () => npm.runScript('build'),
  });

  await runDeploymentStep({
    stepName: 'Running prune',
    action: () => npm.prune(true),
  });

  await runDeploymentStep({
    stepName: 'Zipping artifacts',
    action: () => fileSystem.zipFolder([
      fileSystem.getCwdPath('node_modules'),
      fileSystem.getCwdPath('dist')
    ],
      fileSystem.getCwdPath('cfn/artifacts.zip')
    ),
  });

  await runDeploymentStep({
    stepName: 'Packaging',
    action: () => cfn.package({
      templateFilePath: fileSystem.getCwdPath('cfn/cloudformation.yaml'),
      outputFilePath: fileSystem.getCwdPath('cfn/cloudformation-transformed.yaml'),
      packageBucket: 'failsave-api-resources-446226631021-us-east-1',
      profile: 'private-account-aws',
    }),
  });

  await runDeploymentStep({
    stepName: 'Deploying',
    action: () => new Promise((resolve, reject) => 
      exec(`aws cloudformation deploy \
      --region us-east-1 \
      --no-fail-on-empty-changeset \
      --template-file cfn/cloudformation-transformed.yaml \
      --stack-name failsave-api-dev \
      --capabilities CAPABILITY_NAMED_IAM \
      --parameter-overrides "Environment=dev" "HostedZoneId=ZRE7DHAD3SMKA" "CertificateArn=arn:aws:acm:us-east-1:446226631021:certificate/af8aa751-0e2b-49de-aba7-62f020a29a78" \
      --profile private-account-aws`, (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          reject(error)
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
      resolve(stdout);
      }))
  });
});
