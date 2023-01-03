import { getQuery } from "h3";
import { del } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const { col, id } = getQuery(event);

    console.log(`//// api/firestore/delete.get --> const { col, id } = getQuery(event) : col is ${JSON.stringify(col)}, id is ${JSON.stringify(id)}`)

    await del(col, id);

    return { result: id }
  } catch (error) {
    return { error: error.message }
  }
});