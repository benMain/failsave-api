import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Post,
  Delete,
} from '@nestjs/common';
import { MonitoredApplicationService } from './monitored-application.service';
import { MonitoredApplication } from './monitored-application';
import { QldbQuery } from 'nest-qldb';
import { ApiExtension } from '@nestjs/swagger';
import { xApiGatewayParameters } from '../constants';

@Controller('monitored-application')
export class MonitoredApplicationController {
  constructor(
    private readonly monitoredAppService: MonitoredApplicationService,
  ) {}

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Get(':id')
  async get(@Param('id') id: string) {
    return await this.monitoredAppService.get(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Put(':id')
  async put(@Param('id') id: string, @Body() app: MonitoredApplication) {
    return await this.monitoredAppService.put(id, app);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Post()
  async post(@Body() app: MonitoredApplication) {
    return await this.monitoredAppService.post(app);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.monitoredAppService.delete(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Get('history/:id')
  async history(@Param('id') id: string) {
    return await this.monitoredAppService.history(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Put()
  async query(@Body() query: QldbQuery<MonitoredApplication>) {
    return await this.monitoredAppService.query(query);
  }
}
