import arcjet, { shield, detectBot, tokenBucket }  from "@arcjet/node";
import { ARCJET_ENV, ARCJET_KEY } from "./env.js";


// Arcjet API key
const aj = arcjet({
  // key from https://app.arcjet.com -> Project -> API Key
  key: ARCJET_KEY,
  env: ARCJET_ENV,
  characteristics: ["ip.src"], // Track requests by IP
  rules: [
    // Shield protects your app from common attacks e.g. SQL injection
    shield({ mode: "LIVE" }),
    // Create a bot detection rule
    detectBot({
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
      // Block all bots except the following
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
      ],
    }),
    // Create a token bucket rate limit. Other algorithms are supported.
    tokenBucket({
      mode: "LIVE",
      refillRate: 5, // Refill 5 tokens per interval
      interval: 10, // Refill every 10 seconds
      capacity: 10, // Bucket capacity of 10 tokens
    }),
  ],
});

export default aj;
