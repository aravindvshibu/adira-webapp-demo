import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
})
export class StepsComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  manageStepClicks(sel: string) {
    console.log(sel);
    this.messageService.show(sel);
  }

  dataSourceClass() {
    return this.messageService.isDataSourceActive
      ? 'container__title_selected'
      : 'container__title';
  }

  uploadClass() {
    return this.messageService.isUploadActive
      ? 'container__title_selected'
      : 'container__title';
  }

  dataConfigurationClass() {
    return this.messageService.isQuestionActive
      ? 'container__title_selected'
      : 'container__title';
  }
  ngOnInit() {}
}
