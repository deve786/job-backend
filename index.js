const json_server=require('json-server')
const cors=require('cors')

const server=json_server.create()
const middle=json_server.defaults()
const db=json_server.router('db.json')


server.use(middle)
server.use(cors())
server.use(db)

const PORT=8001
server.listen(PORT,()=>{
    console.log(`Port running at ${PORT}`);
})
