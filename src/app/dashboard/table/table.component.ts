import { 
    Component, 
    Input, 
    Output, 
    EventEmitter 
} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {
    @Input() movies: string[];
    @Output() drop = new EventEmitter<CdkDragDrop<string[]>>();
}
