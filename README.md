# GIB
Global investigation bureau

Detective online browser game, using LLM to act as third party user. So the player have to interrogate to find clues, search the environment, and bring all information together to find the criminal to win.

## Technologies

For developing the GIB online detective browser game, you can consider using the following technologies:

### Frontend:
- HTML/CSS: For structuring and styling the web pages.
- JavaScript/TypeScript: For adding interactivity and game logic.
- React.js: A popular library for building user interfaces.

### Backend:
- Node.js: For server-side logic and handling requests.
- Express.js: A web framework for Node.js to build APIs.

### Database:
- MongoDB: A NoSQL database for storing game data and user information.

### Language Model Integration:
- OpenAI GPT-3 or GPT-4: For implementing the large language model to act as a third-party user.

### Game Development:
- Phaser.js: A framework for creating HTML5 games.

### Version Control:
- Git: For version control and collaboration.

### Deployment:
- Heroku/Vercel: For deploying the web application.

## Folder Structure

GIB/
├── public/                 # Static files (HTML, images, etc.)
│   ├── index.html
│   └── ...
├── src/                    # Source files
│   ├── assets/             # Assets like images, fonts, etc.
│   ├── components/         # React components
│   ├── pages/              # React pages
│   ├── services/           # API calls and services
│   ├── styles/             # CSS/SCSS files
│   ├── App.js              # Main React component
│   ├── index.js            # Entry point for React
│   └── ...
├── server/                 # Backend files
│   ├── controllers/        # Controllers for handling requests
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── app.js              # Express app setup
│   └── ...
├── test/                   # Test files
│   ├── frontend/           # Frontend tests
│   ├── backend/            # Backend tests
│   └── ...
├── .gitignore              # Git ignore file
├── package.json            # NPM package configuration
├── README.md               # Project documentation
└── ...
