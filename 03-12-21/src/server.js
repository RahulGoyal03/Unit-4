const app = require("./index")

const connect = require("./configs/db")

app.listen(2025, async () => {
    await connect()
    console.log("Listening on Port 2025...")
})