import express from "express";
import {
    createProject,
    deleteProject,
    getAllProjects,
    getProjectById,
    updateProject,
} from "../controller/projectController.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();


// Public
router.get("/getall", getAllProjects);

// Admin Only
router.post("/add", isAuthenticated, createProject);
router.put("/update/:id", isAuthenticated, updateProject);
router.delete("/delete/:id", isAuthenticated, deleteProject);

// Public - Keep parameterized routes at the end
router.get("/:id", getProjectById);

export default router;
