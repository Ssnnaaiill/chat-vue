var app = require("express")();
var server = require("http").createServer(app);
var io = require("socket.io")(server, {
  pingTimeout: 1000
});

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// send message to client localhost:3000 is available
app.get("/", function(req, res) {
  res.sendFile("Hellow Chating App Server");
});

io.on("connection", function(socket) {
  socket.on("chat", function(data) {
    console.log("Message from %s: %s", data.name, data.msg);

    var msg = {
      from: {
        name: data.name
      },
      msg: data.msg
    };

    socket.broadcast.emit("chat", msg);
  });

  socket.on("disconnect", function() {
    console.log("user disconnected: " + socket.name);
  });
});

server.listen(3000);
