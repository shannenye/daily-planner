import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        ProfilePicComponent,
        TextBlockComponent,
        SearchComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        ProfilePicComponent,
        TextBlockComponent,
        SearchComponent,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
