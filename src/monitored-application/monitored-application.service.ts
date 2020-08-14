import { Injectable, Logger } from '@nestjs/common';
import { MonitoredApplication } from './monitored-application';
import { Repository, InjectRepository, QldbQuery } from 'nest-qldb';
import { BaseService } from '../core';

@Injectable()
export class MonitoredApplicationService extends BaseService<MonitoredApplication>{
  constructor(
    @InjectRepository(MonitoredApplication)
    readonly monitoredOrgRepository: Repository<MonitoredApplication>,
  ) {
    super(monitoredOrgRepository);
  }
}
