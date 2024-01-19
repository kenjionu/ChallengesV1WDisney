import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { IconComponent } from "./icon/icon.component";
import { InputComponent } from "./input/input.component";
import { LabelComponent } from "./label/label.component";
import { ListComponent } from "./list/list.component";
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './templates/main-layout/main-layout.component';
import { SelectComponent } from "./select/select.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations: [
        ButtonComponent,
        IconComponent,
        InputComponent,
        LabelComponent,
        ListComponent,
        HeaderComponent,
        MainLayoutComponent,
        SelectComponent,
    ],
    imports: [
      CommonModule,
      FormsModule
    ],
    exports: [
        ButtonComponent,
        IconComponent,
        InputComponent,
        LabelComponent,
        ListComponent,
        HeaderComponent,
        MainLayoutComponent,
        SelectComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule {}
