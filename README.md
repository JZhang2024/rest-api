# REST API Project Using Node.js, Express, and MongoDB

## About

This project is a simple REST API built using Node.js, Express, and MongoDB. It's designed as a learning tool for understanding the basics of backend development and as a reusable template for future projects. The API supports CRUD (Create, Read, Update, Delete) operations, providing a solid foundation for building and expanding upon.

## Features

- **CRUD Operations:** Create, Read, Update, and Delete functionality for managing data.
- **Node.js & Express Framework:** Utilizes Node.js for the runtime environment and Express.js for the web application framework.
- **MongoDB Integration:** Uses MongoDB, a NoSQL database, for storing and retrieving data.
- **Easy to Understand Code:** Written with readability and simplicity in mind, perfect for beginners.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone [repository URL]
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

### API Endpoints

| Method | Endpoint       | Description             |
| ------ | -------------- | ----------------------- |
| GET    | /items         | Fetch all items         |
| GET    | /items/:id     | Fetch an item by ID     |
| POST   | /items         | Create a new item       |
| PUT    | /items/:id     | Update an item by ID    |
| DELETE | /items/:id     | Delete an item by ID    |

## Usage

After starting server, REST requests can be sent from an existing client or through an API testing platform like Postman that will display response data to be compared with expected behavior.

## License

[MIT](https://choosealicense.com/licenses/mit/)
