import { IsNotEmpty, IsArray } from 'class-validator';
import { QldbTable } from 'nest-qldb';

@QldbTable({
  tableName: 'failsave_monitored_apps',
  tableIndexes: ['applicationName'],
})
export class MonitoredApplication {
  @IsNotEmpty()
  applicationName: string;

  applicationLogoUrl: string;

  @IsArray()
  @IsNotEmpty()
  scheduleIdHierarchy: string[];
}
