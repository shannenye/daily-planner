import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';
import { DashboardState } from './interfaces';

export const initialState: DashboardState = {
    tickets: [],
    sortBy: null
};

export const reducer = createReducer(
    initialState,
    on(
        DashboardActions.loadDashboardSuccess, 
        (state, { payload }) => ({ ...state, tickets: payload })
    ),
    on(
        DashboardActions.sortDashboardTicketsSuccess,
        (state, { payload }) => ({ 
            ...state, 
            tickets: payload.tickets,
            sortBy: payload.sortBy
        })
    )
);

export function dashboardReducer(state: DashboardState, action: Action) {
    return reducer(state, action);
}

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectDashboardTicketsState = createSelector(
    selectDashboardState,
    (state: DashboardState) => state.tickets
);

export const selectDashboardSortByState = createSelector(
    selectDashboardState,
    (state: DashboardState) => state.sortBy
);