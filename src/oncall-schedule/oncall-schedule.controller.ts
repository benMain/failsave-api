import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Post,
  Delete,
} from '@nestjs/common';
import { OncallScheduleService } from './oncall-schedule.service';
import { Oncallschedule } from './oncall-schedule';
import { QldbQuery } from 'nest-qldb';
import { ApiExtension } from '@nestjs/swagger';
import { xApiGatewayParameters } from '../constants';

@Controller('oncall-schedule')
export class OncallScheduleController {
  constructor(private readonly scheduleService: OncallScheduleService) {}

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Get(':id')
  async get(@Param('id') id: string) {
    return await this.scheduleService.get(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Put(':id')
  async put(@Param('id') id: string, @Body() schedule: Oncallschedule) {
    return await this.scheduleService.put(id, schedule);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Post()
  async post(@Body() schedule: Oncallschedule) {
    return await this.scheduleService.post(schedule);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.scheduleService.delete(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Get('history/:id')
  async history(@Param('id') id: string) {
    return await this.scheduleService.history(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Put()
  async query(@Body() query: QldbQuery<Oncallschedule>) {
    return await this.scheduleService.query(query);
  }
}
