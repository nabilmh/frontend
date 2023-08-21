import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { AxiosService } from '../axios.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  formLogin! : FormGroup

  isAuthenticated: boolean = false;
  
  constructor(private fb : FormBuilder,private authService: AuthService,private router: Router,private productService : ProductService) { }

  ngOnInit() : void{
    this.formLogin = this.fb.group({
      username:this.fb.control(""),
      password:this.fb.control("")
    })
    
  }

  handleLogin() {
    
    let username =this.formLogin.value.username
    let pwd = this.formLogin.value.password
    this.authService.login(username,pwd).subscribe({
      next:data=> {
        console.log(data)
        this.authService.isAuthenticated = true;
        console.log("workd")
        this.router.navigateByUrl("/product")
      },
      error: err =>{
        console.log(err)
        console.log("not worked")
      }
    })
    
  }
  

}
