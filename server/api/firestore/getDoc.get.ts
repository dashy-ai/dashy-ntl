import { getQuery } from "h3";
import { getDocument } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event.req);

    console.log(`//// ${JSON.stringify(query)}`)

    const docs = await getDocument(query.col as string, query.id as string);

    return { result: docs };
  } catch (error) {
    return { result: [], error: error.message };
  }
});