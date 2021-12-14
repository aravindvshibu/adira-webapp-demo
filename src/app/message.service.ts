import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  isQuestionActive = false;
  isConfigActive = false;
  isDataSourceActive = true;
  isUploadActive = false;
  constructor() {}

  hideAll() {
    this.isQuestionActive = false;
    this.isConfigActive = false;
  }

  show(option) {
    this.hideAll();
    this[option] = true;
  }
}
