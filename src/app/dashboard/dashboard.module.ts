import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardContainer } from './dashboard.container';
import { DragDropModule } from '@angular/cdk/drag-drop';

const COMPONENTS = [
    DashboardContainer,
    DashboardComponent,
    TableComponent,
];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        DragDropModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardContainer,
                pathMatch: 'full'
            }
        ])
    ],

})
export class DashboardModule { }
