// import type { IncomingMessage, ServerResponse } from 'http'
// import { parseCookies } from 'h3'

// export default async ( req: IncomingMessage, res: ServerResponse ) => {
//   const userCookie = parseCookies( req )
//   res.statusCode = 200;
//   res.end("Works!")

// };

export default defineEventHandler((event) => {
  // event.context.auth = { user: 123 }
  // console.log(JSON.stringify(event.context))
  const cookie = getCookie(event, 'userCookie')
  event.req.user = cookie
  console.log(`>>>>> server middleware : attach this gookie to event.req.user : ${cookie}`)
})

