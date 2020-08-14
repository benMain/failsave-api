import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository } from 'nest-qldb';
import { User } from './user';
import { BaseService } from '../core';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User) readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }
}
