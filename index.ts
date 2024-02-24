// import express from "express";
// import smtp from "smtp-server";
import { SMTPServer } from "smtp-server";

const server = new SMTPServer({
  allowInsecureAuth: true,
  onConnect(session, cb) {
    cb();
  },
  onMailFrom(address, session, callback) {
    callback();
  },
  onRcptTo(address, session, callback) {
    callback();
  },
  onData(stream, session, callback) {
    stream.on("end", callback);
  },
});

server.listen(25, () => console.log("Listening on port 25"));
