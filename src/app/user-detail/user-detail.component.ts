import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { collection, doc, onSnapshot } from '@angular/fire/firestore';
import { User } from '../models/user.class';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatButtonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit, OnDestroy {

  userId = ''
  user: User = new User();
  unsubscribe;

  constructor(private route: ActivatedRoute, private firebase: FirebaseService,) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log(this.userId);

      this.getUser(this.userId);

    })
  }

  ngOnDestroy(): void {
    this.unsubscribe
  }

  getUser(id: string) {
    console.log(id);

    this.unsubscribe = onSnapshot(doc(collection(this.firebase.firestore, 'users'), id), (change) => {
      this.user = new User(change.data()) 
      console.log(this.user);
    }
    )
  }

  openAddressDialog(){
    
  }
}
