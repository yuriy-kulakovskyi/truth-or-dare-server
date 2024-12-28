require('dotenv').config({ path: '../.env.local' });

const Pusher = require("pusher");

const {
  APP_ID,
  KEY,
  SECRET,
  CLUSTER
} = process.env;

if (!APP_ID || !KEY || !SECRET || !CLUSTER) {
  throw new Error("One or more Pusher environment variables are missing");
}

const pusher = new Pusher({
  appId: APP_ID,
  key: KEY,
  secret: SECRET,
  cluster: CLUSTER,
  useTLS: true
});

module.exports = pusher;