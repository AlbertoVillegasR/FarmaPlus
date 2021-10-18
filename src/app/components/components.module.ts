import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        ComponentsRoutingModule,
        CommonModule,
    ],
    declarations:[
        HomeComponent,
    ],
    providers:[
    ]
})
export class ComponentsModule { }
