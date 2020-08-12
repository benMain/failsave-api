import { Test, TestingModule } from '@nestjs/testing';
import { MonitoredApplicationController } from './monitored-application.controller';

describe('MonitoredApplication Controller', () => {
  let controller: MonitoredApplicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonitoredApplicationController],
    }).compile();

    controller = module.get<MonitoredApplicationController>(
      MonitoredApplicationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
