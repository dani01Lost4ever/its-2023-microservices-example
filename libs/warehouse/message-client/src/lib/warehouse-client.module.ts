import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WarehouseClient } from './warehouse-client.service';
import { WAREHOUSE_MESSAGE_HOST, WAREHOUSE_MESSAGE_PORT } from '@warehouse/config';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'TEST_SERVICE', transport: Transport.TCP, options: {host: WAREHOUSE_MESSAGE_HOST, port: WAREHOUSE_MESSAGE_PORT}},
    ])
  ],
  providers: [WarehouseClient],
  exports: [WarehouseClient],
})
export class WarehouseClientModule {}
