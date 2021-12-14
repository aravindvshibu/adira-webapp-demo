import { Component, Input, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class QuestionComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  enableQuestion = true;
  question_text: string = 'some text 1';

  previousIndex = 0;
  index = 0;
  cars = [
    { id: 1, name: 'BMW Hyundai' },
    { id: 2, name: 'Kia Tata' },
    { id: 3, name: 'Volkswagen Ford' },
    { id: 4, name: 'Renault Audi' },
    { id: 5, name: 'Mercedes Benz Skoda' },
  ];

  selected = [];
  selections = [[], [], []];

  captureAnswerSelections() {
    this.selections[this.previousIndex] = this.selected;
    this.selected = this.selections[this.index];
  }

  ngOnInit(): void {
    this.enableQuestion = true;
    this.question_text = 'some text 1';

    this.previousIndex = 0;
    this.index = 0;
    this.cars = [
      { id: 1, name: 'BMW Hyundai' },
      { id: 2, name: 'Kia Tata' },
      { id: 3, name: 'Volkswagen Ford' },
      { id: 4, name: 'Renault Audi' },
      { id: 5, name: 'Mercedes Benz Skoda' },
    ];

    this.selected = [];
    this.selections = [[], [], []];
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
  }

  decreaseIndex() {
    this.previousIndex = this.index;
    if (this.index == 0) {
      this.index = this.question_list.length - 1;
    } else {
      this.index--;
    }
    this.captureAnswerSelections();
  }

  question_list = ['question1', 'question2', 'question3'];

  getQuestion() {
    return this.question_list[this.index];
  }
}
