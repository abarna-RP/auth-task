# User Authentication and Authorization API

This is a Node.js API for user authentication and authorization using JWT, built with Express.js and Mongoose, following the MVC pattern.

## Features

* **User Registration:** Allows new users to create accounts by providing a username, email, password, and role.
* **User Login:** Authenticates existing users using their email and password, issuing a JWT upon successful login.
* **Protected Routes:** Utilizes JWT authentication to secure specific API endpoints, such as retrieving user information.
* **User Information Retrieval:** Provides an endpoint to access user details (excluding the password) based on a valid JWT.

## Tech Stack

* Node.js
* Express.js
* Mongoose (MongoDB)
* JWT (jsonwebtoken)
* bcryptjs
* dotenv

## API Endpoints

###   POST /api/users/register

Description:Registers a new user.
  Request Body:
    ```json
    {
      "username": "abarna",
      "email": "abu@gmail.com",
      "password": "abu123",
      "role": "admin"
    }
    ```
 Response:
    * Success (201 Created):
        ```json
        {
          "message": "User registered successfully"
        }
       ```

###   POST /api/users/login

* **Description:** Logs in a user and returns a JWT.
* **Request Body:**
    ```json
    {
      "email": "abu@gmail.com",
      "password": "abu123"
    }
    ```
  Response:
  Success (200 OK):
        ```json
        {
          "token": "<jwt_token>"
        }
        ```
   

###   GET /api/users/me

Description:Retrieves the authenticated user's information.
Headers:
    * `Authorization: Bearer <jwt_token>`
    Response:
    Success (200 OK):
        ```json
        {
          "_id": "67da675eb1082bfd0c70e5ff",
          "username": "abarna",
          "email": "abu@gmail.com",
          "role": "admin",
          "__v": 0
        }
        ```
    

## Important Notes

* **Security:** Ensure that the `JWT_SECRET` is kept confidential and is a strong, random string.
* **Error Handling:** Implement robust error handling and validation in a production environment.
* **Token Expiration:** Adjust the JWT expiration time as needed.
* **Database:** Ensure that your MongoDB instance is running and accessible.
* ![alt image](https://github.com/abarna-RP/auth-task/blob/main/auth%20outpt.png)
