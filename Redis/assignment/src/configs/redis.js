const {createClient} = require("redis")

 const client = createClient();


//  const a = async () => {
//     await client.connect();
//   }
  client.on("error", function(error) {
      console.error(error);
    });
    
    // a()
// (async () => {
  
//     client.on('error', (err) => console.log('Redis Client Error', err));
  
//     await client.connect();
// })();

module.exports = client