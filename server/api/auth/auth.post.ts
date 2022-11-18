import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event.req)
    const uid = body.user.uid
    console.log(`from auth api: request body = ${JSON.stringify(uid, null, 2)}`)
    return { result: uid };
  } catch (error) {
    return { error: error.message }
  }
});