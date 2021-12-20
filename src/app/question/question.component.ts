import { Component, Input, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  enableQuestion = true;
  question_text: string = 'some text 1';

  previousIndex = 0;
  index = 0;
  cars = [
    { id: 1, name: 'BU/Region' },
    { id: 2, name: 'Market' },
    { id: 3, name: 'Sub-Region' },
    { id: 4, name: 'Category' },
    { id: 5, name: 'Brand' },
    { id: 6, name: 'Product/Sku' },
    { id: 7, name: 'Size' },
    { id: 8, name: 'Material' },
    { id: 9, name: 'Month' },
    { id: 10, name: 'Volume Sales' },
    { id: 11, name: 'Value Sales' },
  ];

  selected = [];
  selections = [[], [], []];
  next = false;
  captureAnswerSelections() {
    this.selections[this.previousIndex] = this.selected;
    this.selected = this.selections[this.index];
  }

  shouldEnableConfirm() {
    let count = 0;
    for (let select1 in this.selections) {
      console.log(select1.length);
      select1.length > 0 ? count++ : 0;
    }
    this.next = count == this.selections.length ? true : false;
    console.log(count);
  }

  ngOnInit(): void {
    this.enableQuestion = true;
    this.question_text = 'some text 1';

    this.previousIndex = 0;
    this.index = 0;
    this.cars = [
      { id: 1, name: 'BU/Region' },
      { id: 2, name: 'Market' },
      { id: 3, name: 'Sub-Region' },
      { id: 4, name: 'Category' },
      { id: 5, name: 'Brand' },
      { id: 6, name: 'Product/Sku' },
      { id: 7, name: 'Size' },
      { id: 8, name: 'Material' },
      { id: 9, name: 'Month' },
      { id: 10, name: 'Volume Sales' },
      { id: 11, name: 'Value Sales' },
    ];

    this.selected = [];
    this.selections = [[], [], []];
  }

  gotoStats() {
    this.messageService.show('isStatsConfirmationActive');
  }
  getCurrentIndex() {
    if (this.index < this.question_list.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    return this.index;
  }

  increaseIndex() {
    this.previousIndex = this.index;
    if (this.index < this.question_list.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.captureAnswerSelections();
    this.shouldEnableConfirm();
  }

  decreaseIndex() {
    this.previousIndex = this.index;
    if (this.index == 0) {
      this.index = this.question_list.length - 1;
    } else {
      this.index--;
    }
    this.captureAnswerSelections();
    this.shouldEnableConfirm();
  }

  question_list = [
    'Select parameters that define an innovation ',
    'Select parameters for threshold calculation',
    'Select time dimension',
  ];

  getQuestion() {
    return this.question_list[this.index];
  }
}
