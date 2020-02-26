import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-app3',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.css']
})
export class App3Component implements OnInit {
  status : string = 'online';
  eid: number;
  name: string;
  salary:number;
  clickCounter: number =0;
  heading : string ="welcome to angular";
  number: number = 54343;
  jsvalue ={name: 'spiderman', age: 23};
 birthday = new Date(2009,2,17);
  employee =[
    {eid:12,name:'suyash',salary:10000},
    {eid:13,name:'shoaib',salary:30000},
    {eid:14,name:'kahani',salary:20000},
    {eid:15,name:'aman',salary:50000}
  ]

  constructor(private data:DataService) 
  {
    
   }
   myClick(){
    let d = this.data.clicks();
    
    document.getElementById('did').innerHTML = d;
     
   }
   getPerson(){
     let x=this.data.getPerson();
    console.log(x);
   }

  ngOnInit() {
  }
  onSubmit(){
    this.employee.push( {'eid':this.eid,'name':this.name,'salary':this.salary});
   
  }
  listUpdated()
  {
    if(this.employee.length>6){
      return "orange";
    }
    else{
      
      
      return "pink";
    }

  }
  onCount(){
    this.clickCounter += 1;

  }
  count(){
    if(this.clickCounter > 10)

    return "red";
  }
  remove(){
    this.employee.pop();
    
  }
 compareName(a,b){

  const bandA = a.name.toUpperCase();
  const bandB = b.name.toUpperCase();
  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;

 }
 sortName(){
   this.employee.sort(this.compareName);
 }
 compareId(a,b){
  const bandA = a.eid;
  const bandB = b.eid;
  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;

 }
 sortId(){
   this.employee.sort(this.compareId);
 }
 compareSalary(a,b){
  const bandA = a.salary;
  const bandB = b.salary;
  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;

 }
 sortSalary(){
   this.employee.sort(this.compareSalary);
 }
}
