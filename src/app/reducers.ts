import { MetaReducer } from '@ngrx/store';
import { dashboardReducer } from './dashboard/dashboard.reducer';
import { DashboardState } from './dashboard/interfaces';

export interface State {
    dashboard: DashboardState
};

export const metaReducers: MetaReducer<any>[] = [];

export const reducers = {
    dashboard: dashboardReducer
};


// what am i doing with this state?