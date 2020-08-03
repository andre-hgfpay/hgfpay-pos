import {HttpModule, Module} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import {cartsProviders} from "./carts.provider";
import {SuppliesService} from "../supplies/supplies.service";
import {suppliesProviders} from "../supplies/supplies.provider";
import {ServiceService} from "../service/service.service";
import {serviceProviders} from "../service/service.provider";

@Module({
  imports: [HttpModule],
  providers: [SuppliesService, ...suppliesProviders,CartsService,...cartsProviders,ServiceService,...serviceProviders],
  controllers: [CartsController]
})
export class CartsModule {}
