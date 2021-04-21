import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { sortAlphabeticalUtil } from '../utils/sort';
import * as fromDashboardActions from './dashboard.actions';
import * as fromDashboardReducer from './dashboard.reducer';
import { TicketDetail } from './interfaces';

@Injectable()
export class DashboardEffects {

    loadDashboard$ = createEffect(() => this.actions$.pipe(
        ofType(fromDashboardActions.loadDashboard),
        map(() => 
            fromDashboardActions.loadDashboardSuccess({ payload: this.apiService.getDashboardData() })
        )
    ));

    sortDashboardTickets$ = createEffect(() => this.actions$.pipe(
        ofType(
            fromDashboardActions.sortDashboardTickets,
        ),
        withLatestFrom(
            this.store.pipe(select(fromDashboardReducer.selectDashboardTicketsState)),
            this.store.pipe(select(fromDashboardReducer.selectDashboardSortByState))
        ),
        map(([action, tickets, sortBy]) => {
            const payload: TicketDetail[] = [...tickets]; 
            let orderBy: boolean = true;

            if (action.payload === 'assignee') { // Sort by Lastname Firstname
                if (
                    sortBy 
                    && sortBy.columnName === 'assignee' 
                    && sortBy.orderBy
                ) {
                    // Ascending order A -> Z
                    payload.sort((a, b) => {
                        const nameA = `${a.assignee.lastName} ${a.assignee.firstName}`;
                        const nameB = `${b.assignee.lastName} ${b.assignee.firstName}`;

                        return sortAlphabeticalUtil(nameB, nameA);
                    })
                    orderBy = !orderBy;
                } else {
                    // Descending order Z -> A
                    payload.sort((a, b) => {
                        const nameA = `${a.assignee.lastName} ${a.assignee.firstName}`;
                        const nameB = `${b.assignee.lastName} ${b.assignee.firstName}`;

                        return sortAlphabeticalUtil(nameA, nameB);
                    })
                }
            } else if (action.payload === 'due date') {
                if (
                    sortBy
                    && sortBy.columnName === action.payload
                    && sortBy.orderBy
                ) {
                    // Sort by closest to furthest due date
                    payload.sort((a, b) => {
                        const dateA = new Date(a.dueDate).getTime();
                        const dateB = new Date(b.dueDate).getTime();

                        return sortAlphabeticalUtil(dateB, dateA);
                    });
                    orderBy = !orderBy;
                } else {
                    // Sort by furthest to closest due date
                    payload.sort((a, b) => {
                        const dateA = new Date(a.dueDate).getTime();
                        const dateB = new Date(b.dueDate).getTime();

                        return sortAlphabeticalUtil(dateA, dateB);
                    });
                }


            } else if (action.payload === 'stage') {
                if (
                    // Sort by descending alphabestical Z -> A
                    sortBy 
                    && sortBy.columnName === action.payload
                    && sortBy.orderBy
                ) {
                    payload.sort((a, b) => {
                        return sortAlphabeticalUtil(b.stage, a.stage);
                    });
                    orderBy = !orderBy;
                } else {
                    // Sort by ascending alphabestical A -> Z
                    payload.sort((a, b) => {
                        return sortAlphabeticalUtil(a.stage, b.stage);
                    });
                }
            } else if (action.payload === 'priority') {
                if (
                    sortBy 
                    && sortBy.columnName === action.payload
                    && sortBy.orderBy
                ) {
                    // Sort by highest to lowest priority
                    payload.sort((a, b) => Number(a.priority) - Number(b.priority));
                    orderBy = !orderBy;
                } else {
                    // Sort by lowest to highest priority
                    payload.sort((a, b) => Number(b.priority) - Number(a.priority));
                }
            }
                
            return fromDashboardActions.sortDashboardTicketsSuccess( { payload: {
                tickets: payload,
                sortBy: {
                    columnName: action.payload,
                    orderBy
                }
            } })
        }
    )));

    dropDashboardRow$ = createEffect(() => this.actions$.pipe(
        ofType(
            fromDashboardActions.dropDashboardRow
        ),
        withLatestFrom(
            this.store.pipe(select(fromDashboardReducer.selectDashboardTicketsState))
        ),
        map(([action, tickets]) => {
            const updatedTickets = [...tickets];

            moveItemInArray(updatedTickets, action.payload.previousIndex, action.payload.currentIndex);

            return fromDashboardActions.loadDashboardSuccess({ payload: updatedTickets });
        })
    ));

    constructor(
        private store: Store,
        private actions$: Actions,
        private apiService: ApiService
    ) {}
}