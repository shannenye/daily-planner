import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared.module';

import { dashboardReducer } from './dashboard.reducer';
import { DashboardEffects } from './dashboard.effects';
import { DashboardContainer } from './dashboard.container';
import { DashboardComponent } from './dashboard.component';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';

@NgModule({
    declarations: [
        DashboardContainer,
        DashboardComponent,
        TableComponent,
        RowComponent
    ],
    imports: [
        CommonModule,
        DragDropModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardContainer,
                pathMatch: 'full'
            }
        ]),
        StoreModule.forFeature('dashboard', dashboardReducer),
        EffectsModule.forFeature([ DashboardEffects ])
    ],
})
export class DashboardModule { }
