const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

// Use default router
server.use("/api", router);
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('JSON Server is running')
})