import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  gotoDataconfiguration() {
    this.messageService.show('isQuestionActive');
  }
  ngOnInit() {}
}
