import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.css'],
})
export class DataSourceComponent implements OnInit {
  azure = 'square';
  s3 = 'square';
  local = 'square';
  sftp = 'square';
  next = false;
  selected = '';

  resetAll() {
    this.azure = 'square';
    this.s3 = 'square';
    this.local = 'square';
    this.sftp = 'square';
  }
  localActive() {
    this.resetAll();
    this.local = 'squareselected';
    this.next = true;
    this.selected = 'local';
  }
  s3Active() {
    this.resetAll();
    this.s3 = 'squareselected';
    this.next = true;
    this.selected = 's3';
  }
  azureActive() {
    this.resetAll();
    this.azure = 'squareselected';
    this.next = true;
    this.selected = 'azure';
  }
  sftpActive() {
    this.resetAll();
    this.sftp = 'squareselected';
    this.next = true;
    this.selected = 'sftp';
  }

  gotoUploadSetting() {
    this.messageService.show('isUploadActive');
  }

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.azure = 'square';
    this.s3 = 'square';
    this.local = 'square';
    this.sftp = 'square';
    this.next = false;
  }
}
