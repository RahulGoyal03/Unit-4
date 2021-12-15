const connect = require("./configs/db")

const app = require("./index")

app.listen(2901, async () => {
    await connect()
    console.log("Listening on port 2901")
})