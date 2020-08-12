import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository, Repository, QldbQuery } from 'nest-qldb';
import { Incident } from './incident';

@Injectable()
export class IncidentService {
  private readonly logger: Logger;
  constructor(
    @InjectRepository(Incident)
    readonly incidentRepository: Repository<Incident>,
  ) {
    this.logger = new Logger(IncidentService.name);
  }

  async get(qldbId: string) {
    return await this.incidentRepository.retrieve(qldbId);
  }

  async put(qldbId: string, app: Incident) {
    await this.incidentRepository.replace(qldbId, app);
  }

  async post(app: Incident) {
    return await this.incidentRepository.create(app);
  }

  async delete(qldbId: string) {
    return await this.incidentRepository.destroy(qldbId);
  }

  async history(qldbId: string) {
    return await this.incidentRepository.history(qldbId);
  }

  async query(query: QldbQuery<Incident>) {
    return await this.incidentRepository.query(query);
  }
}
