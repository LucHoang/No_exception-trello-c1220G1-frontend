import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from '../../service/loginService/login-service.service';
import {Router} from '@angular/router';
import {ILogin} from '../../interface/ilogin';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.passWord === v.confirmPassword) ? null : {
    passwordNotMatch: true
  };
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  selectedFile: File = null;
  // @ts-ignore
  downloadURL: Observable<string>;

  login: ILogin = {
    id: 0,
    userName: '',
    passWord: '',
    email: '',
    confirmPassword: '',
    phone: '',
    role: [],
  };
  constructor(private loginService: LoginServiceService,
              private router: Router,
              private storage: AngularFireStorage,
              private fb: FormBuilder) {
  }

    registerForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý ]+$')]],
      pwGroup: this.fb.group({
        passWord: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
      }, {validator: comparePassword}),
      email: ['', Validators.pattern('^[a-z][a-z0-9\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}')],
      phone: ['', [Validators.required, Validators.pattern('([0]{1})+([0-9]{9})')]]
    });

  ngOnInit() {}

  // onFileSelected(event: any) {
  //   let n = Date.now();
  //   const file = event.target.files[0];
  //   const filePath = `trelloFIle/${n}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(filePath, file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.login.avatar = url;
  //           }
  //         });
  //       })
  //     ).subscribe(url => {
  //     if (url) {
  //       console.log("Upload success");
  //     }
  //   });
  // }

  registionUser() {
    this.loginService.createAppUser(this.login).subscribe(() => {
      this.router.navigate(['/']);
    });
  }


}
