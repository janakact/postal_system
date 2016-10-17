import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.css']
})
export class CheckingComponent implements OnInit {

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
    this.router.navigate(['success/checking']);
  },1000);
  }

}
