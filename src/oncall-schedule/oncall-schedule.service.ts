import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository, Repository } from 'nest-qldb';
import { Oncallschedule } from './oncall-schedule';
import { BaseService } from '../core';

@Injectable()
export class OncallScheduleService extends BaseService<Oncallschedule> {
  constructor(
    @InjectRepository(Oncallschedule)
    readonly scheduleRepository: Repository<Oncallschedule>,
  ) {
    super(scheduleRepository);
  }
}
