import { createReducer, on, Action } from '@ngrx/store';

import * as DashboardActions from './dashboard.actions';
import { DashboardState } from './interfaces';

export const initialState: DashboardState = {
    tickets: [],
    sortBy: {
        columnName: '',
        orderBy: true
    },
    search: '',
    errorState: ''
};

export const reducer = createReducer(
    initialState,
    on(
        DashboardActions.loadDashboardSuccess, 
        (state, { payload }) => ({ ...state, tickets: payload })
    ),
    on(
        DashboardActions.submitDashboardSearch,
        (state, { payload }) => ({
            ...state,
            sortBy: initialState.sortBy,
            search: payload
        })
    ),
    on(
        DashboardActions.sortDashboardTickets,
        (state, { payload}) => ({
            ...state,
            sortBy: {
                columnName: payload,
                orderBy: state.sortBy.columnName === payload ? !state.sortBy.orderBy : false
            }
        })
    ),
    on(
        DashboardActions.loadDashboardFailure,
        (state) => ({
            ...state,
            errorState: 'Oops something went wrong. Please try again :)'
        })
    )
);

export function dashboardReducer(state: DashboardState, action: Action) {
    return reducer(state, action);
}
