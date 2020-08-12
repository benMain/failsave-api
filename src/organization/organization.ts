import { QldbTable } from 'nest-qldb';
import { IsNotEmpty, IsUrl } from 'class-validator';

@QldbTable({
  tableName: 'failsave_organizations',
  tableIndexes: ['administratorUserId', 'createdUserId'],
})
export class Organization {
  @IsNotEmpty()
  organizationName: string;

  @IsUrl()
  organizationLogoUrl: string;

  memberUserIds: string[];

  @IsNotEmpty()
  administratorUserId: string;

  @IsNotEmpty()
  createdUserId: string;

  monitoredApplicationIds: string[];
}
