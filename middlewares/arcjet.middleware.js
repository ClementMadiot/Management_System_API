import aj from "../config/arcjet.js";

// Middleware function to protect routes using Arcjet
export const arcjetMiddleware = async (req, res, next) => {
  try {
    // Call the protect method from Arcjet with the request object
    const decision = await aj.protect(req, { requested: 1 });

    // Check if the decision is to deny access
    if (decision.isDenied()) {
      // If the reason for denial is rate limiting, respond with status 429
      if (decision.reason.isRateLimit())
        return res.status(429).json({ message: "Too many requests" });

      // If the reason for denial is bot detection, respond with status 403
      if (decision.reason.isBot())
        return res.status(403).json({ message: "Bot detected" });

      // If access is denied for any other reason, respond with status 403
      return res.status(403).json({ message: "Access denied" });
    }
    // Pass to the next middleware
    next();
  } catch (error) {
    // Log any errors that occur during the process
    console.log(`Arjet Middleware Error: ${error.message}`);
    // Pass the error to the next middleware or error handler
    next(error);
  }
};
