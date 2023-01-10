import { Component } from '@angular/core';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent  {

isloading=false;

showLoader(): void{
  this.isloading=true;
}

hideLoader(){
  this.isloading=false;
}

}
