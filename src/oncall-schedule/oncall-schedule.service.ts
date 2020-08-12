import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository, Repository, QldbQuery } from 'nest-qldb';
import { Oncallschedule } from './oncall-schedule';

@Injectable()
export class OncallScheduleService {
  private readonly logger: Logger;
  constructor(
    @InjectRepository(Oncallschedule)
    readonly scheduleRepository: Repository<Oncallschedule>,
  ) {
    this.logger = new Logger(OncallScheduleService.name);
  }

  async get(qldbId: string) {
    return await this.scheduleRepository.retrieve(qldbId);
  }

  async put(qldbId: string, schedule: Oncallschedule) {
    await this.scheduleRepository.replace(qldbId, schedule);
  }

  async post(schedule: Oncallschedule) {
    return await this.scheduleRepository.create(schedule);
  }

  async delete(qldbId: string) {
    return await this.scheduleRepository.destroy(qldbId);
  }

  async history(qldbId: string) {
    return await this.scheduleRepository.history(qldbId);
  }

  async query(query: QldbQuery<Oncallschedule>) {
    return await this.scheduleRepository.query(query);
  }
}
