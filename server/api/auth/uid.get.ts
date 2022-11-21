
export default defineEventHandler(async (event) => {
  try {
    const cookie = getCookie(event, 'userCookie')
    console.log(`>>> uid.get.ts, cookie is : ${JSON.stringify(cookie, null, 2)}`)
    // const docs = await getDocument(query.col as string, query.id as string);
    return cookie ? cookie : 'Signed out';

  } catch (error) {
    return { result: [], error: error.message };
  }
});