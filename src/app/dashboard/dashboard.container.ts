import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { moviesList } from './data';

@Component({
    selector: 'app-dashboard-container',
    template: `
        <app-dashboard
            (drop)="drop($event)"
            [movies]="movies"
        ></app-dashboard>
    `
})
export class DashboardContainer implements OnInit {

    constructor() {}

    ngOnInit(): void {
    }

    movies: string[] = moviesList;

    drop(event: CdkDragDrop<string[]>) {
        console.log('here is event: ', event)
        console.log('this is event: ', event);
      moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
