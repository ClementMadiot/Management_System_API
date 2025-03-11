import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import { createSubscription, getSubscription, getSubscriptions, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();
// Path: /api/v1/subscriptions
subscriptionRouter.get("/", getSubscriptions);

subscriptionRouter.get("/:id", authorize, getSubscription);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => res.send({ title: "UPDATE  subscription" }));

subscriptionRouter.delete("/:id", (req, res) => res.send({ title: "DELETE  subscription" }));

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) => res.send({ title: "CANCEL subscription" }));

subscriptionRouter.get("/upcoming-renewals", (req, res) => res.send({ title: "GET upcoming renewals subscription" }));



export default subscriptionRouter;