import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  resetAll() {
    this.azure = 'square';
    this.s3 = 'square';
    this.local = 'square';
    this.sftp = 'square';
  }
  azureActive() {
    this.resetAll();
    this.azure = 'squareselected';
  }
  ngOnInit() {}
}
