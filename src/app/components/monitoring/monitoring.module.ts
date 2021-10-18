import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OtherService } from "src/app/core/services/other.service";
import { MonitoringIndexComponent } from "./list_all/index.component";
import { MonitoringRoutingModule } from "./monitoring-routing.module";


@NgModule({
    imports: [
        CommonModule,
        MonitoringRoutingModule,
    ],
    declarations: [
        MonitoringIndexComponent,
    ],
    providers: [
        OtherService
    ]
})
export class MonitoringModule { }
