import { 
    Component, 
    Input, 
    Output,
    EventEmitter
} from '@angular/core';

import { TicketDetail } from '../interfaces';

@Component({
    selector: 'app-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.scss']
})
export class RowComponent {
    @Input() ticket: TicketDetail;
    @Output() toggleTicketPriority = new EventEmitter<number>();
}
