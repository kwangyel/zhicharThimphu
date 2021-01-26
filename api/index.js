import express from 'express'
import bodyparser from 'body-parser'
import config from 'dotenv'
import cors from 'cors'
import userRoutes from './server/routes/userRoutes'
import checktoken from './server/middlewares/checkToken'
import zoneRoutes from './server/routes/zoneRoutes'
import buildingRoutes from './server/routes/buildingRoutes'
import unitRoutes from './server/routes/unitRoutes'
import residentRoutes from './server/routes/residentRoutes'
import schoolRoutes from './server/routes/schoolRoutes'
import institutionRoutes from './server/routes/institutionRoutes'
import imageRoutes from './server/routes/imageRoutes'
import structureRoutes from './server/routes/structureRoutes'

import fs from 'fs'
import util from 'util'


config.config()

const app=express()
const port = process.env.PORT || 8080

if(process.env.NODE_ENV == "production"){
	var log_file = fs.createWriteStream(__dirname + '/debug.log',{flags: 'w'})
	console.log = function(d){
		log_file.write(util.format(d)+'\n');
	}
}

//basic starter middlewares
app.use(cors())
app.use(bodyparser.json({limit:'50mb'}))
app.use(bodyparser.urlencoded({limit:'50mb',extended:false}))
app.get('/',(req,res)=>{
	res.send("Welcome to the enumerate API")
})
app.use(express.static(__dirname + '/public'));

//protected enum routes
//app.use('/enum',checktoken.checkToken,enumRoutes)

//login routes
app.use(userRoutes)

//zone router
app.use(zoneRoutes)

app.use(buildingRoutes)
app.use(unitRoutes)
app.use(imageRoutes)
app.use(residentRoutes)
app.use(schoolRoutes)
app.use(institutionRoutes)
app.use(structureRoutes)

app.listen(port,()=>{
	console.log(`server listening on port ${port}`)
	console.log(process.env.SECRET_KEY)
})

export default app;
