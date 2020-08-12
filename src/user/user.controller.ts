import {
  Controller,
  Get,
  Param,
  Body,
  Put,
  Post,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { QldbQuery } from 'nest-qldb';
import { ApiExtension } from '@nestjs/swagger';
import { xApiGatewayParameters } from '../constants';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Get(':id')
  async get(@Param('id') id: string) {
    return await this.userService.get(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Put(':id')
  async put(@Param('id') id: string, @Body() user: User) {
    return await this.userService.put(id, user);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Post()
  async post(@Body() user: User) {
    return await this.userService.post(user);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Get('history/:id')
  async history(@Param('id') id: string) {
    return await this.userService.history(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Put()
  async query(@Body() query: QldbQuery<User>) {
    return await this.userService.query(query);
  }
}
