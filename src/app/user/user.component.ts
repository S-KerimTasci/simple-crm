import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from '../services/firebase.service';
import { collection, onSnapshot, doc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../app.routes';
import { RouterModule } from '@angular/router';





@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnDestroy {

  unsubList;
  // allUsers = [];
  allUsers = new BehaviorSubject<any[]>([]);

  // constructor(public dialog: MatDialog, private firebase: FirebaseService) {

  //   this.unsubList = onSnapshot(collection(this.firebase.firestore, 'users'), (change) => {
  //     change.forEach(element => {
  //       //console.log(element.data());
  //       this.allUsers.push(element.data())


  //       //this.allUsers[element.id] = element.data();
  //       console.log(this.allUsers);
  //     })
  //   })
  // }

  constructor(public dialog: MatDialog, private firebase: FirebaseService) {
    this.unsubList = onSnapshot(collection(this.firebase.firestore, 'users'), (change) => {
      const users = [];
      change.forEach(element => {
        users.push({ id: element.id, ...element.data() });
        
        
      });
      this.allUsers.next(users); // Aktualisiere die Benutzerdaten
      console.log(this.allUsers);
      
      
      
    });
  }

  ngOnDestroy() {
    this.unsubList()
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAddUserComponent, {
      // width: '250px',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }
}


