import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submit-success',
  templateUrl: './submit-success.component.html',
  styleUrls: ['./submit-success.component.css']
})
export class SubmitSuccessComponent implements OnInit {
  id: string;
  private sub: any;

  isChecking:boolean = false;
  isDeliver:boolean = false;
  isAccept:boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number

      if(this.id == "accept") this.isAccept = true;
      if(this.id == "deliver") this.isDeliver = true;
      if(this.id == "checking") this.isChecking = true;


       // In a real app: dispatch action to load the details here.
    });
  }

}
