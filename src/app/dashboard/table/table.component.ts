import { 
    Component, 
    Input, 
    Output, 
    EventEmitter 
} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { SortBy, TicketDetail } from '../interfaces';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {
    @Input() tickets: TicketDetail[] | [];
    @Input() sortBy: SortBy;
    @Input() columnName: string[];
    @Output() drop = new EventEmitter<CdkDragDrop<string[]>>();
    @Output() sortByColumnName = new EventEmitter<string>();
}
