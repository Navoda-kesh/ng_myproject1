import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

 