import { Controller } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { BaseController } from '../core';
import { Organization } from './organization';

@Controller('organization')
export class OrganizationController extends BaseController<Organization> {
  constructor(private readonly orgService: OrganizationService) {
    super(orgService);
  }
}
