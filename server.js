import express from "express"
import { sequelize } from "./dbConnection.js"
const app = express()
const port = 8080;





app.listen(port, () => {
    console.log(`Server islistening on port ${port}`)
})

sequelize.authenticate().then(() => {
    console.log(`Connection has been eastablished successfully!!!`)
}).catch((error) => {
    console.log(`Unable to connect to the databse:`, error)
})