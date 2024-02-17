// src/firebase.js
// Importation modulaire pour Firebase v9+
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Vos paramètres de configuration Firebase
const firebaseConfig = {
  apiKey: "VotreAPIKey",
  authDomain: "VotreAuthDomain",
  projectId: "padel-35b37",
  storageBucket: "VotreStorageBucket",
  messagingSenderId: "VotreMessagingSenderId",
  appId: "1:385690196390:web:cfb8bf1695e923b04f1767",
  databaseURL: "https://padel-35b37-default-rtdb.firebaseio.com/"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Accéder à la base de données Firebase
const database = getDatabase(app);

export { database, app };
