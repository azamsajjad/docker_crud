 CRUD (Create, Read, Update, Delete) Node.js application using MongoDB, with the API endpoint at localhost:3000/api/v1/posts

# Node.js MongoDB CRUD Application

This is a simple Node.js application that demonstrates CRUD operations using MongoDB. The application provides API endpoints to perform operations on posts.

## Getting Started


### Prerequisites

- Docker Desktop Installed
- Node.js installed


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/azamsajjad/docker_crud.git
   
2. Install dependencies:

    ```bash
    npm install --only=dev nodemon
    npm install express mongoose


### Run Application

- Run the application:

Start Docker Desktop:
Start Containers:
$ docker-compose -f .\docker-compose.yml -f .\docker-compose.dev.yml up -d --build
The server will start at http://localhost:3000.

$ docker-compose -f .\docker-compose.yml -f .\docker-compose.dev.yml down


### Endpoints

API Endpoints
    Create a Post
    Endpoint: POST /api/v1/posts
    Request Body:
 
    {
    "title": "Your Post Title",
    "body": "Your Post Body"
    }
        Response:
 
        {
        "success": true,
        "data": {
            "_id": "generatedPostId",
            "title": "Your Post Title",
            "body": "Your Post Body",
            "createdAt": "timestamp"
        }
        }
        
Get All Posts
Endpoint: GET /api/v1/posts


...Review controllers/postControllers for all METHODS...