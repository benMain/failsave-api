import { ApiExtension } from "@nestjs/swagger";
import { xApiGatewayParameters } from "../constants";
import { Get, Param, Put, Body, Post, Delete, Logger } from "@nestjs/common";
import { QldbQuery } from "nest-qldb";
import { BaseService } from "./base-service";

export class BaseController<T> {
    private readonly logger: Logger;
    constructor(readonly service: BaseService<T>) {
        this.logger = new Logger(BaseController.name);
    }

    @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
    @Get(':id')
    async get(@Param('id') id: string) {
      return await this.service.get(id);
    }
  
    @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
    @Put(':id')
    async put(@Param('id') id: string, @Body() obj: T) {
      return await this.service.put(id, obj);
    }
  
    @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
    @Post()
    async post(@Body() obj: T) {
      return await this.service.post(obj);
    }
  
    @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }
  
    @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
    @Get('history/:id')
    async history(@Param('id') id: string) {
      return await this.service.history(id);
    }
  
    @ApiExtension('x-amazon-apigateway-integration', xApiGatewayParameters)
    @Put()
    async query(@Body() query: QldbQuery<T>) {
      return await this.service.query(query);
    }
}