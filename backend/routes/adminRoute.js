import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, AddExpertise, allExperts, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/ExpertiseController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-Expert", authAdmin, upload.single('image'), AddExpertise)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-Experts", authAdmin, allExperts)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;