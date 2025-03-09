
# What is Audeus?

Audeus is a full-stack web application that consists of a **Frontend** and **Backend** to provide seamless user interaction and functionality. 

It is a website where users can upload their documents or PDF files to listen to the main points instead of writing them down.


## Features

- User authentication (Sign up, Login, Logout)
- Secure API endpoints using JWT tokens
- Responsive UI with modern styling
- Database storage and retrieval


## Tech Stack

**Frontend:** React,TailwindCSS,Material-UI, 
pdfjs, Axios (for API requests),React-router-dom.

**Backend:** NodeJS, ExpressJS, JWT Authentication.

**Database:** MongoDB.


## Getting Started

**Prerequisites**

*Required Versions:*

**Node.js >= 18.0.0**

**npm >= 8.0.0**

**Pdf-dist >=5.10**

Before running the application, you'll need to set up several services and environment variables:




**1.** Setup Local Services

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```

## Backend Setup
1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Create a `.env` file in the `backend` directory and configure the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```sh
   npm run start  # or yarn start
   ```

## Environment Variables
The project requires environment variables for proper functioning. Ensure the following variables are set:


For more in-depth information on environment variables, please refer to the Environment Variables section.


**Backend .env:**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

**Frontend .env:**
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```
## Deployment

To deploy the application, consider using:
- **Frontend**: Vercel, Netlify.
- **Backend**: Render


## Screenshots

![App Screenshot](https://files.catbox.moe/wy3hru.png)

 
## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.


## License

This project is licensed under the MIT License.

