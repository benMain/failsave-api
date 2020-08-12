import { Test, TestingModule } from '@nestjs/testing';
import { MonitoredApplicationService } from './monitored-application.service';

describe('MonitoredApplicationService', () => {
  let service: MonitoredApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonitoredApplicationService],
    }).compile();

    service = module.get<MonitoredApplicationService>(
      MonitoredApplicationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
