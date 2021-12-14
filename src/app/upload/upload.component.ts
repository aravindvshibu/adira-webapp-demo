import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  next = false;
  constructor(private messageService: MessageService) {}
  gotoDataconfiguration() {
    this.messageService.show('isQuestionActive');
  }

  enableNext() {
    this.next = true;
  }
  ngOnInit() {
    this.next = false;
  }
}
