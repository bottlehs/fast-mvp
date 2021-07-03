export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBAdUeKC-9y3n2LrflHiudThnCzIuZ5VgE",
  authDomain: "fast-mvp.firebaseapp.com",
  databaseURL: "https://fast-mvp-default-rtdb.firebaseio.com",
  projectId: "fast-mvp",
  storageBucket: "fast-mvp.appspot.com",
  messagingSenderId: "658972784715",
  appId: "1:658972784715:web:d9a08c974f2fe739f5b5ce",
  measurementId: "G-E36W044NV8"
};

export const snapshotToArray = (snapshot: any) => {
  const returnArray: any = []
  snapshot.forEach((element: any) => {
      const item = element.val()
      item.key = element.key
      returnArray.push(item)
  });
  return returnArray
}