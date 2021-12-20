import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  enableLandingPage = true;
  enableInnovationAnalytics = false;
  isQuestionActive = false;
  isConfigActive = false;
  isDataSourceActive = true;
  isUploadActive = false;
  isStatsConfirmationActive = false;
  isapiGeneratedActive = false;
  constructor() {}

  hideAll() {
    this.isQuestionActive = false;
    this.isConfigActive = false;
    this.isDataSourceActive = false;
    this.isUploadActive = false;
    this.isStatsConfirmationActive = false;
    this.isapiGeneratedActive = false;
  }

  show(option) {
    this.hideAll();
    this[option] = true;
  }
}
