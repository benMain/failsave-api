import { IsNotEmpty } from 'class-validator';
import { QldbTable } from 'nest-qldb';

@QldbTable({
  tableName: 'failsave_incidents',
  tableIndexes: ['applicationId', 'incidentCreateDate'],
})
export class Incident {
  @IsNotEmpty()
  applicationId: string;

  @IsNotEmpty()
  incidentCreateDate: Date;

  @IsNotEmpty()
  incidentStatus: IncidentStatus;

  @IsNotEmpty()
  incidentMessage: string;

  acknowledgedDate?: Date;

  resolvedDate?: Date;

  communication?: Communication[];
}

export interface Communication {
  communicationDate: Date;
  userId: string;
  response?: Response;
}

export type IncidentStatus = 'unacknowledged' | 'acknowledged' | 'resolved';
export type Response = 'acknowledged' | 'resolved';
