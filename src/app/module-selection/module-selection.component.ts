import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-module-selection',
  templateUrl: './module-selection.component.html',
  styleUrls: ['./module-selection.component.css'],
})
export class ModuleSelectionComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}
}
