import { QldbTable } from 'nest-qldb';
import { IsNotEmpty, IsNumber, IsArray } from 'class-validator';

@QldbTable({
  tableName: 'failsave_schedules',
  tableIndexes: ['scheduleName'],
})
export class Oncallschedule {
  @IsNotEmpty()
  scheduleName: string;

  scheduleLogoUrl: string;

  @IsNotEmpty()
  scheduleStartDate: Date;

  @IsNumber()
  scheduleRotationIntervalHours: number;

  @IsNotEmpty()
  @IsArray()
  scheduleUserIds: string[];
}
