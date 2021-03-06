import {Global, Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from '@nestjs/sequelize';
import {AttendantsModule} from './attendants/attendants.module';
import {AttendantsEntity} from "./attendants/attendants.entity";
import { ServiceModule } from './service/service.module';
import {ServiceEntity} from "./service/service.entity";
import { SuppliesModule } from './supplies/supplies.module';
import {SuppliesEntity} from "./supplies/supplies.entity";
import {CartsEntity} from "./carts/carts.entity";
import {CartsModule} from "./carts/carts.module";
import { OrdersModule } from './orders/orders.module';

@Global()
@Module({
    imports: [ConfigModule.forRoot({
        envFilePath: '.env'
    }), SequelizeModule.forRoot({
        // @ts-ignore
        dialect: process.env.DB_CONNECTION,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        models: [AttendantsEntity,ServiceEntity,SuppliesEntity,CartsEntity],
        autoLoadModels: process.env.DB_AUTOLOADMODELS=='true',
        synchronize: process.env.DB_SYNCHRONIZE=='true',
        dialectOptions: {
            "useUTC": false
        },
        timezone: "-03:00"
    }), AttendantsModule, ServiceModule, SuppliesModule,CartsModule, OrdersModule],
    providers: [],
    controllers: []
})
export class AppModule {

}
