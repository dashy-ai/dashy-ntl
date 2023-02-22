import { useContent } from "./useStates";


export const getFirestoreData = async (col: string) => {
  try {

    const result = await $fetch(endpoints.firestore.query(col));
    return result;

  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const getFirestoreDoc = async (col: string, id: string) => {
  try {

    console.log(`//////// takes ${col} and ${id}`)
    const result = await $fetch(endpoints.firestore.getDoc(col, id));
    return result;

  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const getFirestoreDocByKeyVal = async (col: string, field: string, value: string) => {
  try {

    console.log(`//////// takes ${col}, ${field} and ${value}`)
    const result = await $fetch(endpoints.firestore.getDocByKeyVal(col, field, value));
    return result;

  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const addFirestoreData = async (col: string, doc: {}) => {
  try {

    const result = await $fetch(endpoints.firestore.add(col), {
      method: "POST",
      body: doc,
    });

    console.log(`addFirestoreData recieves col: ${col}`)

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const addFirestoreUser = async (col: string, doc: {}) => {
  try {

    console.log(`addFirestoreUser recieves col : ${col}, and doc ${JSON.stringify(doc, null, 4)}`)
    // @ts-ignore
    const user_id = doc.user_id
    console.log(`addFirestoreUser : const user_id : ${JSON.stringify(user_id, null, 4)}`)

    const result = await $fetch(endpoints.firestore.addUser(col, user_id), {
      method: "POST",
      body: doc,
    });

    console.log(`addFirestoreUser() fetch addUser endpoint with: col ${col}, and user_id ${user_id}`)

    return result;

  } catch (error) {
    console.log(error.message);
  }
};

export const updateFirestoreDocument = async (col: string, doc: {}) => {
  try {

    console.log(`updateFirestoreDocument recieves col : ${col}, and doc ${JSON.stringify(doc, null, 4)}`)
    // @ts-ignore
    const user_id = doc.user_id
    console.log(`updateFirestoreDocument : const doc_id (named user_id) : ${JSON.stringify(user_id, null, 4)}`)
    // @ts-ignore
    const result = await $fetch(endpoints.firestore.update(col, user_id), {
      method: "POST",
      body: doc,
    });

    console.log(`addFirestoreUser() fetch addUser endpoint with: col ${col}, and user_id ${user_id}`)

    return result;

  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFirestoreData = async (col: string, id: string) => {
  try {
    // @ts-ignore
    const { result } = await $fetch(endpoints.firestore.delete(col, id));

    return result;
  } catch (error) {
    console.log(error.message);
  }
};