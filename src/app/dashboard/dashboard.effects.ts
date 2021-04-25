import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, withLatestFrom } from 'rxjs/operators';

import { ApiService } from '../api/api.service';
import * as fromDashboardSelector from './dashboard.selectors';
import * as fromDashboardActions from './dashboard.actions';

@Injectable()
export class DashboardEffects {

    loadDashboard$ = createEffect(() => this.actions$.pipe(
        ofType(
            fromDashboardActions.loadDashboard
        ),
        map(() => 
            fromDashboardActions.loadDashboardSuccess({ 
                payload: this.apiService.getDashboardData() 
            })
        ),
        catchError(() => of(
            fromDashboardActions.loadDashboardFailure()
        ))
    ));

    dropDashboardRow$ = createEffect(() => this.actions$.pipe(
        ofType(
            fromDashboardActions.dropDashboardRow
        ),
        withLatestFrom(
            this.store.pipe(
                select(fromDashboardSelector.selectdDashboardSearchSortedTicketsState)
            )
        ),
        map(([ action, tickets ]) => {
            const updatedTickets = [...tickets];

            moveItemInArray(
                updatedTickets, 
                action.payload.previousIndex, 
                action.payload.currentIndex
            );

            return fromDashboardActions.loadDashboardSuccess({ 
                payload: updatedTickets 
            });
        }),
        catchError(() => of(
            fromDashboardActions.loadDashboardFailure()
        ))
    ));

    constructor(
        private store: Store,
        private actions$: Actions,
        private apiService: ApiService
    ) {}
}