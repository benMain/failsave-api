import { Injectable, Logger } from '@nestjs/common';
import { MonitoredApplication } from './monitored-application';
import { Repository, InjectRepository, QldbQuery } from 'nest-qldb';

@Injectable()
export class MonitoredApplicationService {
  private readonly logger: Logger;
  constructor(
    @InjectRepository(MonitoredApplication)
    readonly monitoredOrgRepository: Repository<MonitoredApplication>,
  ) {
    this.logger = new Logger(MonitoredApplicationService.name);
  }

  async get(qldbId: string) {
    return await this.monitoredOrgRepository.retrieve(qldbId);
  }

  async put(qldbId: string, app: MonitoredApplication) {
    await this.monitoredOrgRepository.replace(qldbId, app);
  }

  async post(app: MonitoredApplication) {
    return await this.monitoredOrgRepository.create(app);
  }

  async delete(qldbId: string) {
    return await this.monitoredOrgRepository.destroy(qldbId);
  }

  async history(qldbId: string) {
    return await this.monitoredOrgRepository.history(qldbId);
  }

  async query(query: QldbQuery<MonitoredApplication>) {
    return await this.monitoredOrgRepository.query(query);
  }
}
