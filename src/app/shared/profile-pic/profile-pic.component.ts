import { Component, Input } from '@angular/core';

import { Image } from '../interfaces';

@Component({
    selector: 'app-profile-pic',
    templateUrl: './profile-pic.component.html',
    styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent {
    @Input() image: Image;
}
