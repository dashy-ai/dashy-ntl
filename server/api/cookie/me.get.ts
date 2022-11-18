import { getQuery } from "h3";

export default defineEventHandler((event) => {
  try {
    const cookie = getCookie(event, 'userCookie')
    // const docs = await getDocument(query.col as string, query.id as string);
    return cookie ? cookie : 'Signed out';
  } catch (error) {
    return { result: [], error: error.message };
  }
});