import { getQuery } from "h3";
import { getDocument } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);

    console.log(`//// api/firestore/getDoc.get --> query = getQuery(event) : query is ${JSON.stringify(query)}`)
    console.log(`//// api/firestore/getDoc.get --> query.col is ${JSON.stringify(query.col)}, and query.id is ${JSON.stringify(query.id)}`)

    const docs = await getDocument(query.col as string, query.id as string);

    return { result: docs };
  } catch (error) {
    return { result: [], error: error.message };
  }
});