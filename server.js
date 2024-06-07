const mongoose = require ("mongoose")

const cronJob = require ("./cronJob")
const dotenv = require ("dotenv")


const app = require ("./app")

dotenv.config()




const Port = process.env.PORT

const HOSTNAME = process.env.HOSTNAME

mongoose.connect (process.env.LOCAL_DATADB,{
  UseNewUrlParser: true
}) .then(()=>{
  console.log("DB conection successful")
})


app.listen (Port, ()=>{
  console.log(`app is running at http://${HOSTNAME}:${Port}`)

})

cronJob ()