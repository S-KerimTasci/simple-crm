import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.class';
import { doc, collection, updateDoc } from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatProgressBarModule, FormsModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {

  loading: boolean = false;

  user: User;
  userId = ''

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firebase: FirebaseService) { }

  async saveUser(user:User) {
    this.loading = true;

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


