
export default defineEventHandler(async (event) => {

  const cookie = getCookie(event, 'userCookie')

  if (cookie) {
    const data = 'You are approved'
    return data
  } else {
    const data = 'You are NOT approved'
    return data
  }

})
