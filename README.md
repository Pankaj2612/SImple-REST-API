# Simple User Management REST API

A basic RESTful API for managing users. Each user has a name, email, and age. Data is stored in a local JSON file.

## 🚀 Features

- **Add Users**: Create new user records with unique email validation.
- **View Users**: Get all users or a specific user by ID.
- **Update Users**: Edit user details.
- **Delete Users**: Remove users.
- **Validation**: Ensures email is unique and required fields are provided.

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Pankaj2612/SImple-REST-API.git
cd SImple-REST-API
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

The API will be available at `http://localhost:8000/`.

## 🧪 API Endpoints

### Users

- **POST** /users: Add a new user.  
  **Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```
  **Response**:
```json
{
  "message": "User created successfully.",
  "user": {
    "id": "unique_id",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
  }
}
```

- **GET** /users: Retrieve all users.

- **GET** /users/:email: Retrieve a single user by Email.

- **PUT** /users/:email: Update a user's details.  
  **Body** (any of the fields can be updated):
  ```json{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 26
}
```
  **Response**:
```json
{
  "message": "User updated successfully.",
  "user": {
    "id": "unique_id",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "age": 26
  }
}
```

- **DELETE** /users/:email: Delete a user.  
  **Response**:
```json
{
  "message": "User deleted successfully."
}
```
