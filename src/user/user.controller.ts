import {
  Controller,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { BaseController } from '../core';


@Controller('users')
export class UserController extends BaseController<User>{
  constructor(private readonly userService: UserService) {
    super(userService);
  }

}
