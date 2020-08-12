aws cloudformation package \
    --template-file cloudformation.yaml \
    --s3-bucket failsave-api-resources-446226631021-us-east-1 \
    --output-template-file cloudformation-transformed.yaml \
    --profile private-account-aws


# Update the Cloudformation Stack.
aws cloudformation deploy \
    --region us-east-1 \
    --no-fail-on-empty-changeset \
    --template-file cloudformation-transformed.yaml \
    --stack-name failsave-api-dev \
    --capabilities CAPABILITY_NAMED_IAM \
    --parameter-overrides "Environment=dev" "HostedZoneId=ZRE7DHAD3SMKA" \
    "CertificateArn=arn:aws:acm:us-east-1:446226631021:certificate/af8aa751-0e2b-49de-aba7-62f020a29a78" \
    --profile private-account-aws

