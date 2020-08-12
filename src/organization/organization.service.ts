import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository, Repository, QldbQuery } from 'nest-qldb';
import { Organization } from './organization';

@Injectable()
export class OrganizationService {
  private readonly logger: Logger;
  constructor(
    @InjectRepository(Organization)
    readonly orgRepository: Repository<Organization>,
  ) {
    this.logger = new Logger(OrganizationService.name);
  }

  async get(qldbId: string) {
    return await this.orgRepository.retrieve(qldbId);
  }

  async put(qldbId: string, org: Organization) {
    await this.orgRepository.replace(qldbId, org);
  }

  async post(org: Organization) {
    return await this.orgRepository.create(org);
  }

  async delete(qldbId: string) {
    return await this.orgRepository.destroy(qldbId);
  }

  async history(qldbId: string) {
    return await this.orgRepository.history(qldbId);
  }

  async query(query: QldbQuery<Organization>) {
    return await this.orgRepository.query(query);
  }
}
