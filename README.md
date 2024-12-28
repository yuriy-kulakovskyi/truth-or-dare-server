# Truth or Dare Backend

A backend implementation for the "Truth or Dare" game, built with Node.js, Express, MongoDB, and Pusher. This server provides APIs for managing game sessions, generating random challenges, and tracking player interactions in real-time.

## Features
- Manage game sessions and player data
- Generate random Truth or Dare challenges
- Real-time updates using Pusher
- MongoDB for persistent data storage

## Technologies Used
- **Node.js**: Runtime environment for building the backend
- **Express**: Framework for creating APIs
- **MongoDB & Mongoose**: Database and ORM for handling data
- **Pusher**: Real-time communication
- **Nodemon**: Development tool for automatic server restarts

## Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd truth-or-dare-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   APP_ID=<your_pusher_app_id>
   KEY=<your_pusher_key>
   SECRET=<your_pusher_secret>
   CLUSTER=<your_pusher_cluster>
   MONGO_URL=<your_mongodb_url>
   ```

4. Start the server:
   - For development (using Nodemon):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

## API Endpoints

#### 1. **GET /truth (dare)**
   Retrieve a list of random Truth or Dare challenges.
   - Request body:
     ```json
     { "message": "<Your message>" }
   - Response:
     ```json
     [
       { "question": "<Question from api>"}
     ]
     ```

#### 2. **POST /session**
   Create a new game session.
     ```
   - Response:
     ```json
     { "roomId": "<roomId>" }
     ```

## Folder Structure
```
truth-or-dare-backend/
├── Models/        # Mongoose models
├── services/      # API route handlers and Pusher service
├── .env           # Environment variables (not included in repo)
├── index.js       # Entry point for the application
```

## Contributing
Feel free to open issues or submit pull requests to improve the project. All contributions are welcome!

## License
This project is licensed under the [MIT License](LICENSE).