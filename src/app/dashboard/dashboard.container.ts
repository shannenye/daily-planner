import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store, select } from '@ngrx/store';
import { dropDashboardRow, loadDashboard, sortDashboardTickets } from './dashboard.actions';
import { selectDashboardSortByState, selectDashboardTicketsState } from './dashboard.reducer';
import { columnName } from './data';
import { PreviousAndCurrentIdx, TicketDetail } from './interfaces';

@Component({
    selector: 'app-dashboard-container',
    template: `
        <app-dashboard
            [tickets]="tickets$ | async"
            [sortBy]="sortBy$ | async"
            [columnName]="columnName"
            (submitSearch)="submitSearch($event)"
            (drop)="drop($event)"
            (sortByColumnName)="sortByColumnName($event)"
        ></app-dashboard>
    `
})
export class DashboardContainer implements OnInit {
    tickets$ = this.store.pipe(select(selectDashboardTicketsState));
    sortBy$ = this.store.pipe(select(selectDashboardSortByState));
    columnName: string[] = columnName;


    constructor(
        private store: Store
    ) {}

    ngOnInit() {
        this.store.dispatch(loadDashboard());
    }

    submitSearch(event: string) {
        console.log('submitSearch: ', event);
    }
 
    drop(event: CdkDragDrop<string[]>) {
        const previousAndCurrentIdx: PreviousAndCurrentIdx = {
            previousIndex: event.previousIndex,
            currentIndex: event.currentIndex
        }

        this.store.dispatch(dropDashboardRow({ payload: previousAndCurrentIdx }));
    }

    sortByColumnName(columnName: string) {
        this.store.dispatch(sortDashboardTickets({ payload: columnName }));
    }
}
