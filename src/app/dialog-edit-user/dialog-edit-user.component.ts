import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../models/user.class';
import { FirebaseService } from '../services/firebase.service';
import { doc, collection, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatProgressBarModule,FormsModule,MatDatepickerModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {

  user:User;
  userId ='';
  birthDate: Date;

  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firebase: FirebaseService) { }

  async saveUser(user:User) {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();

    await updateDoc(doc(collection(this.firebase.firestore, 'users'), this.userId), this.getCleanJson(user)).catch(
      (err) => { console.error(err) }
    ).then(
      (user) => {
        console.log(user);
      }
    )
    this.dialogRef.close();
    this.loading = false;
  };

  getCleanJson(user:User):{}{
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email:user.email,
      birthDate: user.birthDate,
      street: user.street,
      zipCode: user.zipCode,
      city: user.city,
  }
  }
  }

