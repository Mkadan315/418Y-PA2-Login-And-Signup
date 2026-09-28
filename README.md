# PA2 - Login and Signup

Name: Mathew Kadanthod

## Description:

This is a full stack app with a frontend using React, a backend using Express, and a MongoDB database.
Users are able to make an account by clicking (Signup) and log back in by clicking (Login)
The front end sends the requests to the backend, which makes sure that the user info is saved correctly
in the MongoDB and sends back a success or error message.

## Project Structure

PA2-Login-Signup/
    - server/ -> Express + MongoDB backend
    - client/ -> React frontend

## How to Run this Application:

You first need to have Node.js installed and MongoDB running.

**1. Start the backend**
- cd server
- npm install
- npm start

You will see a "Connected to MongoDB!" and "Server is running on port 5000" after you start it.

If you're not running MongoDB locally, you should open the server/server.js file and change the 'MONGO_URI" line to your own connection string.

**2. Start the frontend** (opening a new terminal tab)
- cd client
- npm install
- npm start

This will open up the app at http://localhost:3000

**3. Try it yourself**
- Sign up with a first name, last name, username, and password
- Try signing up again with the same username and it should say that it is taken already
- Login with the account you made
- Try logging in with the wrong password and it should say that it is incorrect
- Try logging in with a username that doesn't exist

## How It Works (going over the code)

- **React (client/src)** The 'App.js' file shows either a Login or Signup form.
  Each form then stores what the user types using 'useState', and uses 'axios' to send that data to the backend when the form is submitted.
- **Express (server/server.js and server/routes/auth.js)**: The two routes
  '/api/auth/signup' and '/api/auth/login' handle the requests from React.
  They check for any missing fields, looks up the user in MongoDB, and sends
  back a JSON response like '{success: true, message: "..."}'
- **MongoDB (server/models/User.js)**: Mongoose defines what a user looks like
  ('f_name', 'l_name', 'username', 'password') and MongoDB stores each user as
  a document with an auto-generated '_id'.

## Some known issues:

Passwords are just written down as plain text for simplicity
There isn't any encryption/hashing done
