import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  input: string;

  Title =" this is a shitty page";
  Name = "World";
  Adress ="KIET college";
  Contact_no = 987654458;
  Gender= "trans"
  img_link = "https://media-exp1.licdn.com/dms/image/C5103AQG-Ufrv1-6x_w/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=d7uHnSuj_RGJS79oP8No1BC0XQj79tZwmkgsBCkRWkE"
  // constructor(Name:string,Adress:string,Contact_no:number) { 
   
  // }
  submit(){
   this.input = prompt("enter a name");
   console.log(this.input);
  }

  ngOnInit() {
  }

}
