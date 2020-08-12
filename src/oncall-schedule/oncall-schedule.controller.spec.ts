import { Test, TestingModule } from '@nestjs/testing';
import { OncallScheduleController } from './oncall-schedule.controller';

describe('OncallSchedule Controller', () => {
  let controller: OncallScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OncallScheduleController],
    }).compile();

    controller = module.get<OncallScheduleController>(OncallScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
