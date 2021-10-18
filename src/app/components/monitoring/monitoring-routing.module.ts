import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MonitoringIndexComponent } from './list_all/index.component';

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forChild([
            {
                path: 'list',
                component: MonitoringIndexComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class MonitoringRoutingModule { }
