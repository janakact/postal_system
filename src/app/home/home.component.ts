import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor( private router:Router) { }

  loading = false;
  loaded = true;
  ngOnInit() {
  }


  onSubmit(): void {
    this.loading = true;
    this.loaded = false;
    setTimeout(()=>{
                this.router.navigate(['success/accept']);
  },1000);
  }

}
