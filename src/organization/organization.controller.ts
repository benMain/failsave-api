import {
  Controller,
  Logger,
  Get,
  Param,
  Put,
  Body,
  Post,
  Delete,
} from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { QldbQuery } from 'nest-qldb';
import { Organization } from './organization';
import { ApiExtension } from '@nestjs/swagger';
import { xApiGatewayParameters } from '../constants';

@Controller('organization')
export class OrganizationController {
  private readonly logger: Logger;
  constructor(private readonly orgService: OrganizationService) {}

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Get(':id')
  async get(@Param('id') id: string) {
    return await this.orgService.get(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Put(':id')
  async put(@Param('id') id: string, @Body() org: Organization) {
    return await this.orgService.put(id, org);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Post()
  async post(@Body() org: Organization) {
    return await this.orgService.post(org);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.orgService.delete(id);
  }
  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Get('history/:id')
  async history(@Param('id') id: string) {
    return await this.orgService.history(id);
  }

  @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
  @Put()
  async query(@Body() query: QldbQuery<Organization>) {
    return await this.orgService.query(query);
  }
}
