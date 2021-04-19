import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ticketDataList } from './data';
import { TicketDetail } from './interfaces';
import { Store, select } from '@ngrx/store';
import { loadDashboard } from './dashboard.actions';
import { selectDashboardTicketsState } from './dashboard.reducer';

@Component({
    selector: 'app-dashboard-container',
    template: `
        <app-dashboard
            [tickets]="tickets$ | async"
            (submitSearch)="submitSearch($event)"
            (drop)="drop($event)"
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
}
