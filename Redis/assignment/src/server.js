const app = require("./index")

const connect = require("./configs/db")

app.listen(4312, async () => {
    await connect()
    console.log("Listening on PORT 4312")
})
