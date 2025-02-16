import express from 'express';
import { loginExpert, appointmentsExpert, appointmentCancel, ExpertList, changeAvailablity, appointmentComplete, ExpertiseDashboard, ExpertiseProfile, updateExpertiseProfile } from '../controllers/ExpertiseController.js';
import authExpert from '../middleware/authExpert.js';
const ExpertRouter = express.Router();

ExpertRouter.post("/login", loginExpert)
ExpertRouter.post("/cancel-appointment", authExpert, appointmentCancel)
ExpertRouter.get("/appointments", authExpert, appointmentsExpert)
ExpertRouter.get("/list", ExpertList)
ExpertRouter.post("/change-availability", authExpert, changeAvailablity)
ExpertRouter.post("/complete-appointment", authExpert, appointmentComplete)
ExpertRouter.get("/dashboard", authExpert, ExpertiseDashboard)
ExpertRouter.get("/profile", authExpert, ExpertiseProfile)
ExpertRouter.post("/update-profile", authExpert, updateExpertiseProfile)

export default ExpertRouter;