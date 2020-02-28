import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/shared/log.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styles: []
})
export class LogListComponent implements OnInit {

  constructor(public service:LogService) { }

  ngOnInit(): void {
    this.service.refreshit();
  }

}
