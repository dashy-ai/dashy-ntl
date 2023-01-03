import { getQuery } from "h3";
import { queryByCollection } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    // console.log(JSON.stringify(query))

    console.log(`//// api/firestore/query.get --> const query = getQuery(event); : query is ${JSON.stringify(query)}`)
    console.log(`//// api/firestore/query.get --> query.col is ${JSON.stringify(query.col)}`)

    const docs = await queryByCollection(query.col as string);

    return { result: docs };
  } catch (error) {
    return { result: [], error: error.message };
  }
});