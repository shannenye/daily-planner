import { createAction, props } from '@ngrx/store';
import { 
    SortDashboardTicketsSuccessPayload, 
    TicketDetail,
    PreviousAndCurrentIdx
} from './interfaces';

export const loadDashboard = createAction('[Dashboard] Load Dashboard');

export const loadDashboardSuccess = createAction(
    '[Dashboard] Load Dashboard Success',
    props<{ payload: TicketDetail[] }>()
);

// export const loadDashboardFailure = createAction('[Dashboard] Load Dashboard Failure');

export const sortDashboardTickets = createAction(
    '[Dashboard] Sort Dashboard Tickets',
    props<{ payload: string }>()
);

export const sortDashboardTicketsSuccess = createAction(
    '[Dashboard] Sort Dashboard Tickets Success',
    props<{ payload: SortDashboardTicketsSuccessPayload }>()
)

export const dropDashboardRow = createAction(
    '[Dashboard] Drop Dashboard Row',
    props<{ payload: PreviousAndCurrentIdx }>()
)