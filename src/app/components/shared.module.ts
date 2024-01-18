import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ButtonComponent } from "./atoms/button/button.component";
import { IconComponent } from "./atoms/icon/icon.component";
import { InputComponent } from "./atoms/input/input.component";
import { LabelComponent } from "./atoms/label/label.component";
import { ListComponent } from "./organisms/list/list.component";
import { HeaderComponent } from './organisms/header/header.component';
import { MainLayoutComponent } from './templates/main-layout/main-layout.component';

@NgModule({
    declarations: [
        ButtonComponent,
        IconComponent,
        InputComponent,
        LabelComponent,
        ListComponent,
        HeaderComponent,
        MainLayoutComponent,
    ],
    exports: [
        ButtonComponent,
        IconComponent,
        InputComponent,
        LabelComponent,
        ListComponent,
        HeaderComponent,
        MainLayoutComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule {}
