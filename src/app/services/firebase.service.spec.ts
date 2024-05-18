import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [{provide:Firestore, useValue: {}} ]
    });
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
