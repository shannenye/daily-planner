import { 
    Component, 
    Input, 
    Output, 
    EventEmitter 
} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { SortBy, TicketDetail } from './interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    @Input() tickets: TicketDetail[];
    @Input() sortBy: SortBy;
    @Input() columnName: string[];
    @Output() submitSearch = new EventEmitter<string>();
    @Output() drop = new EventEmitter<CdkDragDrop<string[]>>();
    @Output() sortByColumnName = new EventEmitter<string>();
}
