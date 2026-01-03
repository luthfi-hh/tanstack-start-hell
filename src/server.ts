import handler from '@tanstack/react-start/server-entry'
import { paraglideMiddleware } from './paraglide/server'

export default {
  fetch(req: Request): Promise<Response> {
    console.log('Received request:>>>>>>>>>>>>>', req.url)
    return paraglideMiddleware(req, () => handler.fetch(req))
  },
}