/* src/index.ts */
import http from 'http'
const port = 3001
http
  .createServer((req, res: http.ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write("Hello World! I'm a minimal project made with TS")
    res.end()
  })
  .listen(port)

console.log(`Server running at port ${port}`);