import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store, select } from '@ngrx/store';
import { loadDashboard, sortDashboardTickets } from './dashboard.actions';
import { selectDashboardTicketsState } from './dashboard.reducer';

@Component({
    selector: 'app-dashboard-container',
    template: `
        <app-dashboard
            [tickets]="tickets$ | async"
            (submitSearch)="submitSearch($event)"
            (drop)="drop($event)"
            (sortBy)="sortBy($event)"
        ></app-dashboard>
    `
})
export class DashboardContainer implements OnInit {
    tickets$ = this.store.pipe(select(selectDashboardTicketsState));

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
        // moveItemInArray(this.tickets, event.previousIndex, event.currentIndex);
    }

    sortBy(columnName: string) {
        this.store.dispatch(sortDashboardTickets({ payload: columnName }));
    }
}
