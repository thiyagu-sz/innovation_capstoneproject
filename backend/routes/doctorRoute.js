import express from 'express';
import { loginDoctor, appointmentsDoctor, appointmentCancel, doctorList, changeAvailablity, appointmentComplete, ExpertiseDashboard, ExpertiseProfile, updateExpertiseProfile } from '../controllers/ExpertiseController.js';
import authDoctor from '../middleware/authDoctor.js';
const doctorRouter = express.Router();

doctorRouter.post("/login", loginDoctor)
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel)
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor)
doctorRouter.get("/list", doctorList)
doctorRouter.post("/change-availability", authDoctor, changeAvailablity)
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete)
doctorRouter.get("/dashboard", authDoctor, ExpertiseDashboard)
doctorRouter.get("/profile", authDoctor, ExpertiseProfile)
doctorRouter.post("/update-profile", authDoctor, updateExpertiseProfile)

export default doctorRouter;