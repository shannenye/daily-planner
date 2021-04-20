import { createAction, props } from '@ngrx/store';
import { SortDashboardTicketsSuccessPayload, TicketDetail } from './interfaces';

export const loadDashboard = createAction('[Dashboard] Load Dashboard');

export const loadDashboardSuccess = createAction(
    '[Dashboard] Load Dashboard Success',
    props<{ payload: TicketDetail[] }>()
);

// export const loadDashboardFailure = createAction('[Dashboard] Load Dashboard Failure');

export const sortDashboardTickets = createAction(
    '[Dashboard] Sort',
    props<{ payload: string }>()
);

export const sortDashboardTicketsSuccess = createAction(
    '[Dashboard] Sort Success',
    props<{ payload: SortDashboardTicketsSuccessPayload }>()
)