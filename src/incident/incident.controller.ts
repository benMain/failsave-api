import { Controller } from '@nestjs/common';
import { IncidentService } from './incident.service';
import { BaseController } from '../core';
import { Incident } from './incident';

@Controller('incident')
export class IncidentController extends BaseController<Incident> {
  constructor(readonly incidentService: IncidentService) {
    super(incidentService);
  }
}
