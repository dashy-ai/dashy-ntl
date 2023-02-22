import { getQuery } from "h3";
import { getDocumentByFieldValue } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);

    console.log(`//// api/firestore/getDocByKeyVal.get --> query = getQuery(event) : query is ${JSON.stringify(query)}`)
    console.log(`//// api/firestore/getDocByKeyVal.get --> query.col is ${JSON.stringify(query.col)}, and query.field is ${JSON.stringify(query.field)}, and query.value is ${JSON.stringify(query.value)}`)

    const docs = await getDocumentByFieldValue(query.col as string, query.field as string, query.value as string);

    return { result: docs };
  } catch (error) {
    return { result: [], error: error.message };
  }
});