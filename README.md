# Recipe Finder App

The Recipe Finder App is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that helps users find recipes based on available ingredients. Users can browse, search, and generate recipes, as well as save their favorite recipes for easy access.

## Features

**Ingredient Selection:**
- Click on common ingredients or search for ingredients
- Select 3-5 pantry ingredients to generate recipes
  
**Recipe Generation:**
Provides detailed recipe views, including:
- Preparation steps
- Cooking instructions
- Estimated cooking time
- Sort and filter recipes by cooking time

**Favorites Management:**
- Save recipes to a favorites page

## Installation

**Prerequisites**

Ensure you have the following installed:
- Node.js
- MongoDB
- npm or yarn

## Steps
**Clone the repository:**
- `git clone https://github.com/yourusername/recipe-finder-app.git`
- `cd recipe-finder-app`

**Install dependencies:**
- `npm install`
  
**Set up environment variables:**
Create a .env file in the backend directory with the following content:
- MONGO_URI=your_mongodb_connection_string
- ACCESS_TOKEN_SECRET=your_access_token_string
  
**Run the application**
- Run `npm run dev` in the backend and frontend

## Misc

### Technologies Used

**Frontend**
- React
- Vite
- Tailwind CSS
- Figma

**Backend**
- Node
- Express
- MongoDB
- JWT


### Future Enhancements
- Allow users to upload their own recipes
- Add more sorting options
- Enhance styles with improved component structure
- Optimize performance for large recipe datasets

## License
This project is licensed under the MIT License.
