import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: number;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private apiservice: ApiService
  ) { }

  ngOnInit(): void {
    // Get the ID from the route parameters
    this.id = this.route.snapshot.params['id'];

    // Check if the ID is defined
    if (this.id) {
      // ID received, fetch user data
      
      this.apiservice.getSingleUser(this.id).subscribe((res) => {
        this.user = res.data;
        console.log(res);
      });
    } else {
      // ID is not defined, handle this case (e.g., show an error message)
      console.error('ID not received.');
      // You can also navigate back to a default page or display an error message to the user.
    }
  }
}
