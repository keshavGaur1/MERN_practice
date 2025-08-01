// initial request http ki aati
const http = require("http");

const HOST = "localhost";
const PORT = 9000;

// server banane ki request ko handle krne ke liye
const requestHandler = function (req, res) {
  res.end("Welcome to Node Server.... "); // end ka matlab response yaha aake end ho jayega
};

// http.createServer( requestHandler ) ; server bana ke use return krega
const server = http.createServer(requestHandler);

// server listen krne ke liye
server.listen(PORT, HOST, (err) => {
  // localhost:PORT   localhost:9000

  if (err) {
    console.log("sevver not start... " + err);
  } else {
    console.log(`server running at http://${HOST}:${PORT}`);
  }
});

/*

agar hme backend mai koi change krna hai to server band krke dubara restart krna pdega

*/
