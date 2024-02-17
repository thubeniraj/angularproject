import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //variable or property
  title = 'client';
  users:any;
  
  constructor(private http:HttpClient){
   
  }
  //method-event of angular-initilation
  ngOnInit(){
    //call getusers method that we define on line no 24
    this.getUsers();
  }

  //method-getusers
  getUsers(){
    //this will call server side url (api-end points)
    this.http.get('https://localhost:7111/api/users').subscribe(res=>{
      //setting data from res(server data )to users variable that will created on line no 12
      this.users=res;
      console.log(this.users);
    },err=>{
      console.log(err);
    })
  }
}
