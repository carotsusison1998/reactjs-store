const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
        req.body.updateAt = Date.now();
    } else if (req.method === 'PATCH') {
        req.body.updateAt = Date.now();
    }
    // Continue to JSON Server router
    next()
})
// Use default router
server.use("/api", router);
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('JSON Server is running')
})