import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, 
              private userService : UserService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }

  save() {
    let formData: FormData = new FormData(); 
    formData.append('user_id', '1');
    formData.append('Title', this.firstFormGroup.controls['firstCtrl'].value);
    formData.append('Description', this.secondFormGroup.controls['secondCtrl'].value);
    formData.append('Date', this.thirdFormGroup.controls['thirdCtrl'].value);
    formData.append('Status', this.fourthFormGroup.controls['fourthCtrl'].value);

    console.log('blogData : ', formData);
    this.userService.save(formData).subscribe(data => {
      console.log('create blog : ', data);
    });
  }

}
