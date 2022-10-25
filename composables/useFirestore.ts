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

    const object = doc
    console.log(`addFirestoreUser recieves col : ${col}, and doc ${JSON.stringify(doc, null, 4)}`)

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

export const deleteFirestoreData = async (col: string, id: string) => {
  try {
    const { result } = await $fetch(endpoints.firestore.delete(col, id));

    return result;
  } catch (error) {
    console.log(error.message);
  }
};