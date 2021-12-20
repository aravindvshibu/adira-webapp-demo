import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'stats-confirmation',
  templateUrl: './stats-confirmation.component.html',
  styleUrls: ['./stats-confirmation.component.css'],
})
export class StatsConfirmationComponent implements OnInit {
  next = false;

  constructor(private messageService:MessageService) {}

  ngOnInit() {}

  gotoApiGenerate(){
    this.messageService.show('isUploadActive');
  }
}
