import firebase from 'firebase';
import { FIREBASE_CONFIG } from './environment'

export class AppComponent {
  constructor(
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp(FIREBASE_CONFIG)
  }
}