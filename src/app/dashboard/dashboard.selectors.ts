import { createFeatureSelector, createSelector } from '@ngrx/store';

import { sortAlphabeticalUtil } from '../utils/sort';
import { DashboardState } from './interfaces';

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
    selectDashboardTicketsState,
    selectDashboardSearchState,
    (tickets, search) => {
        console.log('this is tickets: ', tickets)
        console.log('this is search: ', search)
        
        if (search && tickets.length) {
            const searchWords = search.toLowerCase().split(' ');

            const final = tickets.filter(ticket => {
                let match = false;
                
                for (let word of searchWords) {
                    if (ticket.title.toLowerCase().includes(word)) {
                        console.log('matchingggg: ', word)
                        match = true;
                        break;
                    }
                }

                if (match) return ticket;
            });
            console.log('this is a spec: ', final)



            return final;
        } else {
            return tickets;
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

