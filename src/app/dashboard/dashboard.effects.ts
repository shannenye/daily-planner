import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import * as fromDashboardActions from './dashboard.actions';

@Injectable()
export class DashboardEffects {

    loadDashboard$ = createEffect(() => this.actions$.pipe(
        ofType(fromDashboardActions.loadDashboard),
        map(() => fromDashboardActions.loadDashboardSuccess( { data: this.apiService.getDashboardData() } )))
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) {}
}