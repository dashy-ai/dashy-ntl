import { getQuery, readBody } from "h3";
import { addUser } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const { col, id } = getQuery(event.req);
    const body = await readBody(event.req);

    const docRef = await addUser(col as string, body, id);

    return { result: docRef };
  } catch (error) {
    return { error: error.message }
  }
});