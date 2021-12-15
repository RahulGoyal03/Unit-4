const connect = require("./configs/db")

const app = require("./index")

app.listen(4321, async () => {
    await connect()
    console.log("Listening on PORT 4321")
})