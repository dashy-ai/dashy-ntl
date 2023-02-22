import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
  updateDoc,
  collectionGroup,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";

import { firestoreDb } from "./firebase";


// Query all documents in a collection

export const queryByCollection = async (col: string) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);

  const snapshot = await getDocs(colRef);
  // console.log(`------ snapshot : ${JSON.stringify(snapshot.docs, null, 4)}`)

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // console.log(`------ docs : ${JSON.stringify(docs, null, 4)}`)
  return docs;
};


export const getDocument = async (col: string, id: string) => {
  const docRef = doc(firestoreDb, col, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("// firestore.ts - getDocument() -- docSnap.data():", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("// firestore.ts - getDocument() -- No such document!");
  }
}

export const getDocumentByFieldValue = async (col: string, field: string, value: string) => {
  const colRef = collection(firestoreDb, col);
  // Create a query against the collection.
  const q = query(colRef, where(field, "==", value));

  const querySnapshot = await getDocs(q);

  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  const docs = Array.from(querySnapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // console.log(`------ docs : ${JSON.stringify(docs, null, 4)}`)
  return docs;

}


// Add data to a document? Adds a new document if the document doesn's exist.
// Don't know if there's an ID that can be used as reference?

export const set = async (col: string, document: Object) => {
  await setDoc(doc(collection(firestoreDb, col)), document, { merge: true });
};



// Add a new document, justs send in an object. It will get an new random id.

export const add = async (col: string, document: Object) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);
  const docRef = await addDoc(colRef, document);
  const updateTimestamp = await updateDoc(docRef, {
    created_at: serverTimestamp()
  });
  return docRef;
};



// Add a new user, use collection, object, document ID = userID.

export const addUser = async (col, document, id) => {
  // @ts-ignore
  const colDocRef = doc(firestoreDb, col, id);

  const docRef = await setDoc(colDocRef, document);

  return docRef;
};


// Update a document, use collection, object, document ID (if it's a user, that's the userID)
// Document doesn't have to be complete, can include just the fields that should be updatet for example
// {
//     "age": 13,
//     "favorite color": "Red"
// }

export const update = async (col: string, document: any, id: string) => {
  // @ts-ignore
  const colDocRef = doc(firestoreDb, col, id);
  const docRef = await updateDoc(colDocRef, document);
  return docRef;
};


// Delete a document, takes the collection and the document ID.

export const del = async (col, id) => {
  const docRef = doc(firestoreDb, col, id);
  return await deleteDoc(docRef);
};