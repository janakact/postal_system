import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.component.html',
  styleUrls: ['./deliver.component.css']
})
export class DeliverComponent implements OnInit {

  constructor(private router:Router) { }

  loading =false;
  loaded = false;
  ngOnInit() {
  }

  onSubmitSearch(): void {
    this.loading = true;
    this.loaded = false;
    setTimeout(()=>{
      this.loading = false;
      this.loaded = true;
    }, 1000);

  }


  onSubmit(): void {
    this.loading = true;
    this.loaded = false;
    setTimeout(()=>{
    this.router.navigate(['success/deliver']);
  },1000);
  }

}
