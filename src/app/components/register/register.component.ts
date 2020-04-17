import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  email :String ;
  password : String ;

  constructor(private authservice:AuthService) {

   }

  ngOnInit() {
  }
registerData(){
 const user = {
email:this.email,
password:this.password


 }





this.authservice.registerUser(user);
 
}
}
