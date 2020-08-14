import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository } from 'nest-qldb';
import { Incident } from './incident';
import { BaseService } from '../core';

@Injectable()
export class IncidentService extends BaseService<Incident>{
  constructor(
    @InjectRepository(Incident)
    readonly incidentRepository: Repository<Incident>,
  ) { 
    super(incidentRepository);
   }

}
