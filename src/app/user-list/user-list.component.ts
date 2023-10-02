import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any;
  constructor(private apiservice: ApiService, private router: Router){}
  ngOnInit():void{
    this.getAllUsers();
  }

  getAllUsers(){
    this.apiservice.getAllData().subscribe((res)=>{
      console.log("all data");
      console.log(res);
      this.users = res.data;
    });
  }

  userDetails(id: number){
    console.log('Clicked users ID:', id);
    this.router.navigate(['details', id]);
  }

  editDetails(id: number){
    console.log('Clicked user ID:', id);
    this.router.navigate(['edit', id]);
  }

 // Delete single user by ID
 removeUser(id:number){
  this.apiservice.deleteUser(id).subscribe((res)=>{
    console.log(res)
    //after delete get rest data
    this.getAllUsers();
  });
}



}
