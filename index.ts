// import express from "express";
// import smtp from "smtp-server";
import { SMTPServer } from "smtp-server";
import "dotenv/config";

const server = new SMTPServer({
  allowInsecureAuth: true,
  authOptional: true,
  onConnect(session, callback) {
    console.log("session connected ", session.id);
    callback();
  },
  onMailFrom(address, session, callback) {
    console.log("Found address ", address.address);
    callback();
  },
  onRcptTo(address, session, callback) {
    console.log("Received to ", address.address);
    callback();
  },
  onData(stream, session, callback) {
    stream.on('data', (data) => console.log('Data ', data.toString()))
    stream.on("end", callback);
  },
});

server.listen(process.env.PORT, () => console.log("Listening on port ", process.env.PORT));
