import { db } from './firebase';

// User API

// creates user and stores on `users/:id` path
export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email
  })

// gets all users
export const onceGetUsers = () =>
  db.ref(`users`).once(`value`);

// Other Entity APIs ...
