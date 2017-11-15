import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService]
})
export class CoreModule { }
