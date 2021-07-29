import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  originalUser = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    dob: null,
    role: null
  }

  userObj: User = { ... this.originalUser };

  constructor(private userService : UserService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    let formData: FormData = new FormData(); 
    formData.append('Firstname', form.value.firstName);
    formData.append('Lastname', form.value.lastName); 
    formData.append('Email', form.value.email); 
    formData.append('Password', form.value.password); 
    formData.append('DOB', form.value.dob); 
    formData.append('Role', form.value.role); 


    this.userService.signUpUser(formData).subscribe(data => {
      this.router.navigate(['/login']);
      console.log('signup : ', data);
    });
  }


}
