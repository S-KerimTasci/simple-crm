import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserComponent } from './dialog-edit-user.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,
        MatNativeDateModule 
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: Firestore, useValue: {} },
        {provide: MatDatepicker,useValue: {}},
        {provide: MatNativeDateModule,useValue: {}},
        provideAnimationsAsync(),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
