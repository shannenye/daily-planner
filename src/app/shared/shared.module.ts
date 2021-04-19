import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { SearchComponent } from './search/search.component';

const COMPONENTS = [
    ProfilePicComponent,
    TextBlockComponent,
    SearchComponent
]

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
    ],
    exports: COMPONENTS
})
export class SharedModule { }
