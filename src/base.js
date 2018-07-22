const config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PRODUCT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base