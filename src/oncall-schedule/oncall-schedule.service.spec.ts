import { Test, TestingModule } from '@nestjs/testing';
import { OncallScheduleService } from './oncall-schedule.service';

describe('OncallScheduleService', () => {
  let service: OncallScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OncallScheduleService],
    }).compile();

    service = module.get<OncallScheduleService>(OncallScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
