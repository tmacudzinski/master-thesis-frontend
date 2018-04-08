import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { TestsListComponent } from './components/test/tests-list/tests-list.component';
import { TestCreateComponent } from './components/test/test-create/test-create.component';
import { TestEditComponent } from './components/test/test-edit/test-edit.component';
import { TestDetailsComponent } from './components/test/test-details/test-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'testCreate',
    component: TestCreateComponent
  },
  {
    path: 'testEdit/:id',
    component: TestEditComponent
  },
  {
    path: 'testsList',
    component: TestsListComponent
  },
  {
    path: 'testDetails/:id',
    component: TestDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestsListComponent,
    TestCreateComponent,
    TestEditComponent,
    TestDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
