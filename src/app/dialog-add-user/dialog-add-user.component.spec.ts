import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUserComponent } from './dialog-add-user.component';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDatepicker, MatDatepickerInput, MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,
        MatNativeDateModule, 
      
      ],
      providers : [
        {provide:Firestore, useValue: {}},
        {provide: MatDialogRef,useValue: {}},
        {provide: DateAdapter,useValue: {}},
        {provide: MatDatepicker,useValue: {}},
        {provide: MatNativeDateModule,useValue: {}},
        {provide: MatDialogModule,useValue: {}},
        {provide: MatDatepickerInput,useValue: {}},
       ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
