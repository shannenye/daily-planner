import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { sortAlphabeticalUtil } from '../utils/sort';
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

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectDashboardTicketsState = createSelector(
    selectDashboardState,
    (state: DashboardState) => state.tickets
);

export const selectDashboardSortByState = createSelector(
    selectDashboardState,
    (state: DashboardState) => state.sortBy
);

export const selectDashboardSearchState = createSelector(
    selectDashboardState,
    (state: DashboardState) => state.search
);

export const selectDashboardSearchTickets = createSelector(
    selectDashboardSearchState,
    selectDashboardTicketsState,
    (search, tickets) => {

        if (search) {
            // ITERATE LOGIC HERE FOR SEARCH
            return [];
        } else {
            return [...tickets];
        }
    }
);

export const selectdDashboardSearchSortedTicketsState = createSelector(
    selectDashboardSearchTickets,
    selectDashboardSortByState,
    (stateTickets, stateSortBy) => {

        if (stateSortBy) {
            const sortedTickets = [ ...stateTickets ];
            if (stateSortBy.columnName === 'assignee') {
                if (stateSortBy.orderBy) {
                    // Ascending order A -> Z
                    sortedTickets.sort((a, b) => {
                        const nameA = `${a.assignee.lastName} ${a.assignee.firstName}`;
                        const nameB = `${b.assignee.lastName} ${b.assignee.firstName}`;

                        return sortAlphabeticalUtil(nameB, nameA);
                    });
                } else {
                    // Descending order Z -> A
                    sortedTickets.sort((a, b) => {
                        const nameA = `${a.assignee.lastName} ${a.assignee.firstName}`;
                        const nameB = `${b.assignee.lastName} ${b.assignee.firstName}`;

                        return sortAlphabeticalUtil(nameA, nameB);
                    });
                }
            } else if (stateSortBy.columnName === 'due date') {
                if (stateSortBy.orderBy) {
                    // Sort by closest to furthest due date
                    sortedTickets.sort((a, b) => {
                        const dateA = new Date(a.dueDate).getTime();
                        const dateB = new Date(b.dueDate).getTime();

                        return sortAlphabeticalUtil(dateB, dateA);
                    });
                } else {
                    // Sort by furthest to closest due date
                    sortedTickets.sort((a, b) => {
                        const dateA = new Date(a.dueDate).getTime();
                        const dateB = new Date(b.dueDate).getTime();

                        return sortAlphabeticalUtil(dateA, dateB);
                    });
                }
            } else if (stateSortBy.columnName === 'stage') {
                if (stateSortBy.orderBy) {
                    // Sort by descending alphabetical Z -> A
                    sortedTickets.sort((a, b) => {
                        return sortAlphabeticalUtil(b.stage, a.stage);
                    });
                } else {
                    // Sort by ascending alphabetical A -> Z
                    sortedTickets.sort((a, b) => {
                        return sortAlphabeticalUtil(a.stage, b.stage);
                    });
                }
            } else if (stateSortBy.columnName === 'priority') {
                if (stateSortBy.orderBy) {
                    // Sort by highest to lowest priority
                    sortedTickets.sort((a, b) => Number(a.priority) - Number(b.priority));
                } else {
                    // Sort by lowest to highest priority
                    sortedTickets.sort((a, b) => Number(b.priority) - Number(a.priority));
                }
            }
            return sortedTickets;
        } else {
            return stateTickets;
        }
    }
);

