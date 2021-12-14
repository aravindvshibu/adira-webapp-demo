import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StepsComponent } from './steps/steps.component';
import { QuestionComponent } from './question/question.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ModuleSelectionComponent } from './module-selection/module-selection.component';
import { DataSourceComponent } from './data-source/data-source.component';
@NgModule({
  imports: [BrowserModule, FormsModule, NgSelectModule],
  declarations: [
    AppComponent,
    HelloComponent,
    QuestionComponent,
    ModuleSelectionComponent,
    StepsComponent,
    ConfigurationComponent,
    DataSourceComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
