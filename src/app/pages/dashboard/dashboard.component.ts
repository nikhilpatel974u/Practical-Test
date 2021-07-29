import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allBlog: Blog;

  constructor(private userService : UserService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getAllBlog();
  }

  getAllBlog() {
    this.userService.getBlog().subscribe(data => {
      this.allBlog = data['data']
    });
  }

  openCreateBlog() {
    this.router.navigate(['/create-blog']);
  }

}
