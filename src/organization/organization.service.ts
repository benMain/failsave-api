import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository, QldbQuery } from 'nest-qldb';
import { Organization } from './organization';
import { BaseService } from '../core';

@Injectable()
export class OrganizationService extends BaseService<Organization>{
  constructor(
    @InjectRepository(Organization)
    readonly orgRepository: Repository<Organization>,
  ) {
    super(orgRepository);
  }
}
