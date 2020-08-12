import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Post,
  Delete,
} from '@nestjs/common';
import { IncidentService } from './incident.service';
import { Incident } from './incident';
import { QldbQuery } from 'nest-qldb';
import { ApiExtension } from '@nestjs/swagger';
import { xApiGatewayParameters } from '../constants';

@Controller('incident')
export class IncidentController {
  constructor(private readonly incidentService: IncidentService) {}

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Get(':id')
  async get(@Param('id') id: string) {
    return await this.incidentService.get(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Put(':id')
  async put(@Param('id') id: string, @Body() incident: Incident) {
    return await this.incidentService.put(id, incident);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Post()
  async post(@Body() incident: Incident) {
    return await this.incidentService.post(incident);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.incidentService.delete(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Get('history/:id')
  async history(@Param('id') id: string) {
    return await this.incidentService.history(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Put()
  async query(@Body() query: QldbQuery<Incident>) {
    return await this.incidentService.query(query);
  }
}
