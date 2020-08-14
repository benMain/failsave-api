import {
  Controller,
} from '@nestjs/common';
import { OncallScheduleService } from './oncall-schedule.service';
import { BaseController } from '../core';
import { Oncallschedule } from './oncall-schedule';

@Controller('oncall-schedule')
export class OncallScheduleController extends BaseController<Oncallschedule>{
  constructor(readonly scheduleService: OncallScheduleService) {
    super(scheduleService);
  }

}
