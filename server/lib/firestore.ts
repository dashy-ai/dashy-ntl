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
  collectionGroup,
  Timestamp,
} from "firebase/firestore";

import { firestoreDb } from "./firebase";

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
  console.log(`------ docs : ${JSON.stringify(docs, null, 4)}`)
  return docs;
};

export const set = async (col: string, document: Object) => {
  await setDoc(doc(collection(firestoreDb, col)), document, { merge: true });
};

export const add = async (col: string, document: Object) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);

  const docRef = await addDoc(colRef, document);

  return docRef;
};

export const addUser = async (col, document, id) => {
  // @ts-ignore
  const colDocRef = doc(firestoreDb, col, id);

  const docRef = await setDoc(colDocRef, document);

  return docRef;
};

export const del = async (col, id) => {
  const docRef = doc(firestoreDb, col, id);
  return await deleteDoc(docRef);
};