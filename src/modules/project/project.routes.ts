import express from 'express';

const router = express.Router();

router.get("/", ProjectController.getAllProject)
router.get("/:id", ProjectController.getProjectById)
router.post("/", ProjectController.createProject)
router.patch("/:id", ProjectController.updateProjectById)
router.delete("/:id", ProjectController.deleteProjectById)

export const projectRouter = router

