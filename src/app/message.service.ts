import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  isQuestionActive = true;
  isConfigActive = false;
  isDataSourceActive = false;
  isUploadActive = false;
  constructor() {}

  hideAll() {
    this.isQuestionActive = false;
    this.isConfigActive = false;
    this.isDataSourceActive = false;
    this.isUploadActive = false;
  }

  show(option) {
    this.hideAll();
    this[option] = true;
  }
}
