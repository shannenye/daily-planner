import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    @Input() placeholderText?: string;
    @Output() submitForm = new EventEmitter<string>();
}
