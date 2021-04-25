import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { 
    PreviousAndCurrentIdx, 
    TicketDetail, 
    SortBy 
} from './interfaces';
import { selectDashboardSortByState, selectdDashboardSearchSortedTicketsState } from './dashboard.selectors';
import { 
    dropDashboardRow, 
    loadDashboard, 
    sortDashboardTickets, 
    submitDashboardSearch,
    toggleDashboardTicketPriority
} from './dashboard.actions';

import { columnName } from './data';

@Component({
    selector: 'app-dashboard-container',
    template: `
        <app-dashboard
            [tickets]="tickets$ | async"
            [sortBy]="sortBy$ | async"
            [searchForm]="searchForm"
            [columnName]="columnName"
            (submitSearch)="submitSearch()"
            (drop)="drop($event)"
            (sortByColumnName)="sortByColumnName($event)"
            (toggleTicketPriority)="toggleTicketPriority($event)"
        ></app-dashboard>
    `
})
export class DashboardContainer implements OnInit {
    tickets$: Observable<TicketDetail[] | []> = this.store.pipe(
        select(selectdDashboardSearchSortedTicketsState)
    );
    sortBy$: Observable<SortBy> = this.store.pipe(
        select(selectDashboardSortByState)
    );
    searchForm: FormGroup = new FormGroup({
        searchInputText: new FormControl('')
    })
    columnName: string[] = columnName;

    constructor(
        private store: Store
    ) {}

    ngOnInit() {
        this.store.dispatch(
            loadDashboard()
        );
    }

    submitSearch() {
        this.store.dispatch(
            submitDashboardSearch({ 
                payload: this.searchForm.value.searchInputText 
            })
        );
    }
 
    drop(event: CdkDragDrop<string[]>) {
        const previousAndCurrentIdx: PreviousAndCurrentIdx = {
            previousIndex: event.previousIndex,
            currentIndex: event.currentIndex
        }

        this.store.dispatch(
            dropDashboardRow({ 
                payload: previousAndCurrentIdx 
            })
        );
    }

    sortByColumnName(columnName: string) {
        this.store.dispatch(
            sortDashboardTickets({ 
                payload: columnName 
            })
        );
    }

    toggleTicketPriority(ticketId: number) {
        this.store.dispatch(
            toggleDashboardTicketPriority({
                payload: ticketId
            })
        );
    }
}
