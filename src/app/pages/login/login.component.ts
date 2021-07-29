import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginUser } from '../../models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  originalUser = {
    email: null,
    password: null,
  }

  userObj: LoginUser = { ... this.originalUser };

  constructor(private userService : UserService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    let formData: FormData = new FormData(); 
    formData.append('Email', form.value.email); 
    formData.append('Password', form.value.password); 

    this.userService.loginUser(formData).subscribe(data => {
      this.router.navigate(['/dashboard']);
      console.log('login : ', data);
    });
  }

}
