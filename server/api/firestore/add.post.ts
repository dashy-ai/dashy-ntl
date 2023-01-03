import { getQuery, readBody } from "h3";
import { add } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const body = await readBody(event);

    console.log(`//// api/firestore/add.post --> query = getQuery(event) : query is ${JSON.stringify(query)}`)
    console.log(`//// api/firestore/add.post --> body = await readBody(event); : body is ${JSON.stringify(body)}`)

    const docRef = await add(query.col as string, body);

    return { result: docRef };
  } catch (error) {
    return { error: error.message }
  }
});