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
    this.messageService.show(sel);
  }

  ngOnInit() {}
}
