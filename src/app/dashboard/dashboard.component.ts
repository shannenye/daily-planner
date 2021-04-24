import { 
    Component, 
    Input, 
    Output, 
    EventEmitter 
} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { SortBy, TicketDetail } from './interfaces';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    @Input() tickets: TicketDetail[] | [];
    @Input() sortBy: SortBy;
    @Input() searchForm: FormGroup;
    @Input() columnName: string[];
    @Output() submitSearch = new EventEmitter();
    @Output() drop = new EventEmitter<CdkDragDrop<string[]>>();
    @Output() sortByColumnName = new EventEmitter<string>();
}
