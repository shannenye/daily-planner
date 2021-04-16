import { 
    Component, 
    Input, 
    Output, 
    EventEmitter 
} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    @Input() movies: string[];
    @Output() drop = new EventEmitter<CdkDragDrop<string[]>>();
}
