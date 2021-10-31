import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PickpointsComponent } from './pickpoints/pickpoints.component';
import { MenuComponent } from './menu/menu.component';
import { ApiService } from './api.service';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { FillOrderComponent } from './fill-order/fill-order.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmedOrderComponent } from './confirmed-order/confirmed-order.component';
import { SerachOrderComponent } from './serach-order/serach-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RepliesComponent } from './replies/replies.component';
import { CreateReplyComponent } from './create-reply/create-reply.component';

const appRoutes: Routes = [
  { path: '', component: RestaurantComponent },
  { path: 'pickpoints/:orgId', component: PickpointsComponent },
  { path: 'menu/:pickpointId', component: MenuComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'createOrder/:pickpointId', component: CreateOrderComponent },
  { path: 'fill/:orderId', component: FillOrderComponent },
  { path: 'payment/:orderId', component: PaymentComponent },
  { path: 'confirmed/:orderId', component: ConfirmedOrderComponent },
  { path: 'search', component: SerachOrderComponent },
  { path: 'newReply/:pickpointId', component: CreateReplyComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    PickpointsComponent,
    MenuComponent,
    LoginComponent,
    ProfileComponent,
    RegistrationComponent,
    EditProfileComponent,
    CreateOrderComponent,
    FillOrderComponent,
    PaymentComponent,
    ConfirmedOrderComponent,
    SerachOrderComponent,
    RepliesComponent,
    CreateReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgbModule,
    MatRadioModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
