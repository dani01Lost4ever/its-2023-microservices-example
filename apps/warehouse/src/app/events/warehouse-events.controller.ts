import { Controller } from "@nestjs/common";
import { ShipmentEvent, ShipmentStatusEvents } from "@shipment/config";
import { ShipmentStatusEvent } from "@shipment/event-client";
import { WarehouseService } from "../shared/warehouse.service";

@Controller()
export class WarehouseEventsController {
    constructor(protected warehouseSrv: WarehouseService) {}

    @ShipmentStatusEvent(ShipmentStatusEvents.START)
    async onStart(payload: ShipmentEvent) {
        this.warehouseSrv.addWorkItem(payload);
    }
}
