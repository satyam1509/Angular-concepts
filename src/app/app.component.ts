import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from './shared/components/loader/loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular-concepts';
  constructor(public loader:LoaderComponent){ }

  ngOnInit(): void {
  this.loader.showLoader();
  setTimeout(()=>{
    this.loader.hideLoader()},2000);
  }  
}
