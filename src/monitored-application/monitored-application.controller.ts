import {
  Controller,
} from '@nestjs/common';
import { MonitoredApplicationService } from './monitored-application.service';
import { MonitoredApplication } from './monitored-application';
import { BaseController } from '../core';


@Controller('monitored-application')
export class MonitoredApplicationController extends BaseController<MonitoredApplication>{
  constructor(
    readonly monitoredAppService: MonitoredApplicationService,
  ) {
    super(monitoredAppService);
  }

}
