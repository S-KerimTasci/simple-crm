import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../models/user.class';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { addDoc, collection } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';





@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule, MatProgressBarModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user: User = new User();
  birthDate: Date;

  loading: boolean = false;

  constructor(private firebase: FirebaseService, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  async saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    

    await addDoc(collection(this.firebase.firestore, 'users'), this.user.toJSON()).catch(
      (err) => { console.error(err) }
    ).then(
      (user) => {
        console.log(user);
      }
    )

    this.dialogRef.close();
    this.loading = false;
  }

}
