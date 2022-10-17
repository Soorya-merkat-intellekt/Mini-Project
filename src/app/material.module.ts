import { NgModule } from '@angular/core';
// import { MatToolbarModule } from '@angular/material';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatRippleModule,
        MatInputModule,
        MatIconModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatRippleModule,
        MatInputModule,
        MatIconModule
    ]
})
export class MaterialModule{}
