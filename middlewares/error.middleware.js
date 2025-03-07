// Create a subscription -> middleware (check for renewal date) -> middleware (check for errors) -> next -> controller -> response

// Desc: Error middleware for handling errors 
const errorMiddleware = (err, req, res, next) => {
  try {
    let error = {...err};

    error.message = err.message
    console.error(err);
    
    //MongoDB bad ObjectId
    if(err.name === 'CastError'){
      const message = `Resource not found with id of ${err.value}`;
      error = new Error(message);
      error.statusCode = 404;
    }

    //MongoDB duplicate key
    if(err.code === 11000){
      const message = `Duplicate field value entered`;
      error = new Error(message);
      error.statusCode = 400;
    }

    //MongoDB validation error
    if(err.name === 'ValidationError'){
      const message = Object.values(err.errors).map(val => val.message);
      error = new Error(message.join(', '));
      error.statusCode = 400;
    }

    // Return the response
    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || 'Server Error'
    });
  } catch (error) {
    console.error(error);
    next(error);
    // res.status(500).json({ message: 'Internal server error' });
    
  }
}

export default errorMiddleware;