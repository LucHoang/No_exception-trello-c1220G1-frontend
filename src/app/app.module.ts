import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './helper/jwt.interceptor';
import {ErrorInterceptor} from './helper/error.interceptor';
import {FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CardModule} from './card/card.module';
import {ListModule} from './list/list.module';
// @ts-ignore
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LabelsModule} from './labels/labels.module';
import { HeaderComponent } from './header/header.component';
import {FormLoginModule} from './form-login/form-login.module';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
      MDBBootstrapModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        DragDropModule,
        CardModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ModalModule.forRoot(),
        ListModule,
        FormLoginModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
        BrowserAnimationsModule,
        LabelsModule,
      MatCardModule,
      MatButtonModule,
      ReactiveFormsModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
    ],
  exports: [
    HeaderComponent,
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
