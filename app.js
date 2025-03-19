import express from 'express'

// Import environment variables
import { PORT } from './config/env.js';
import connectToDatabase from './databases/mongodb.js';

// import routes
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import workflowRouter from './routes/workflow.routes.js';

// import middleware
import errorMiddleware from './middlewares/error.middleware.js';
import { arcjetMiddleware } from './middlewares/arcjet.middleware.js';
import cookieParser from 'cookie-parser';


const app = express();

// Handle JSON data
app.use(express.json());
// Process form data
app.use(express.urlencoded({ extended: true }));
// Cookie parser
app.use(cookieParser())
// Protect App using Arcjet
app.use(arcjetMiddleware);

// Routes 
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows', workflowRouter);
// Error middleware
app.use(errorMiddleware)

app.get('/', (req, res) => {
  res.send('Welcome to the Subscription Tracker API');
});

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;