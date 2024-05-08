import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideNativeDateAdapter(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-7aa47","appId":"1:664182227311:web:c3f41499478e1d214c689a","storageBucket":"simple-crm-7aa47.appspot.com","apiKey":"AIzaSyDa2O2lEaFlgTXk6GfXquWs4SYiCwGl6qA","authDomain":"simple-crm-7aa47.firebaseapp.com","messagingSenderId":"664182227311"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())),]
};
