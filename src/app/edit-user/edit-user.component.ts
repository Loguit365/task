import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

export class User {
  id: number;
  Title: string;
  Description: string;
  status: string;
  date: number;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  id: number;
  user: User;
  editForm: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private apiservice: ApiService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.apiservice.getSingleUser(this.id).subscribe((res)=>{
      console.log(res.data.Title);
      this.editForm.patchValue({
        Title: res.data.Title,
        Description: res.data.Description,
        status: res.data.status,
        date:res.data.date

      })
    });

    this.editForm = this.fb.group({
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  onSubmit() {   
    this.apiservice.editUser(this.id, this.user).subscribe((res) => {
      console.log(res)
      this.user = new User();
      this.gotoList();
    });
  }

  //go to list after update value
  gotoList() {
    this.router.navigate(['/list']);
  }

}
