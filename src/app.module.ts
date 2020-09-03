import { Module } from '@nestjs/common';
import { AwsServerlessToolsModule } from '@aws-serverless-tools/nest';
import { ConfigModule } from '@nestjs/config';
import { NestQldbModule, QldbDriver } from 'nest-qldb';
import { SharedIniFileCredentials } from 'aws-sdk';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MonitoredApplicationController } from './monitored-application/monitored-application.controller';
import { MonitoredApplicationService } from './monitored-application/monitored-application.service';
import { OrganizationController } from './organization/organization.controller';
import { OrganizationService } from './organization/organization.service';
import { OncallScheduleController } from './oncall-schedule/oncall-schedule.controller';
import { OncallScheduleService } from './oncall-schedule/oncall-schedule.service';
import { IncidentController } from './incident/incident.controller';
import { IncidentService } from './incident/incident.service';

@Module({
  imports: [
    AwsServerlessToolsModule,
    ConfigModule,
    NestQldbModule.forRoot({
      qldbDriver: new QldbDriver('failsave-ledger-dev', {
        region: 'us-east-1',
        credentials: !!process.env.NODE_ENV ? undefined : new SharedIniFileCredentials({
          profile: 'private-account-aws',
        }),
      }),
      createTablesAndIndexes: true,
    }),
  ],
  controllers: [
    UserController,
    MonitoredApplicationController,
    OrganizationController,
    OncallScheduleController,
    IncidentController,
  ],
  providers: [
    UserService,
    MonitoredApplicationService,
    OrganizationService,
    OncallScheduleService,
    IncidentService,
  ],
})
export class AppModule {}
