import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/shared/log.service';
import { NgForm } from '@angular/forms';

import { from } from 'rxjs';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styles: []
})
export class LogComponent implements OnInit {

  constructor(public service:LogService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form ?: NgForm){
    if(form!=null){
      form.resetForm();
      this.service.refreshit();
    }

    this.service.formData={
      Id: 0,
      Message:'',
      Type:'',
      created_at:''
    }
  }
  onSubmit(form :NgForm){
    this.service.postLog(form.value).subscribe(
      res=>{this.resetForm(form)},
      err=>{console.log(err )}
    )
  }

}
