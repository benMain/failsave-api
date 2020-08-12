import { IsEmail, IsMobilePhone, IsNotEmpty } from 'class-validator';
import { QldbTable } from 'nest-qldb';

@QldbTable({
  tableName: 'failsave_users',
  tableIndexes: ['identityProviderId', 'email'],
})
export class User {
  @IsNotEmpty()
  identityProviderId: string;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsMobilePhone('en-US')
  phoneNumber: string;

  scheduleIds?: string[];

  organizationIds?: string[];
}
