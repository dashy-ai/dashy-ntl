import { getQuery, readBody } from "h3";
import { addUser } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const { col, id } = getQuery(event);
    const body = await readBody(event);

    console.log(`//// api/firestore/addUser.post --> const { col, id } = getQuery(event) : col is ${JSON.stringify(col)}, id is ${JSON.stringify(id)}`)
    console.log(`//// api/firestore/addUser.post --> body = await readBody(event); : body is ${JSON.stringify(body)}`)

    const docRef = await addUser(col as string, body, id);

    return { result: docRef };
  } catch (error) {
    return { error: error.message }
  }
});