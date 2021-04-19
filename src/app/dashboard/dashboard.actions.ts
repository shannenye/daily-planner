import { createAction, props } from '@ngrx/store';
import { TicketDetail } from './interfaces';

export const loadDashboard = createAction('[Dashboard] Load Dashboard');

export const loadDashboardSuccess = createAction(
    '[Dashboard] Load Dashboard Success',
    props<{ data: TicketDetail[] }>()
);

// export const loadDashboardFailure = createAction('[Dashboard] Load Dashboard Failure');
