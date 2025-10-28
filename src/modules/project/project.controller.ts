import { NextFunction, Request, Response } from "express";
import { PostServices } from "./project.services";

const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ProjectServices.createProject(req.body);
    res.status(201).json({
      success: true,
      data: result,
      message: "Project created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to create project",
      error: err instanceof Error ? err.message : err,
    });
  }
};

const getAllProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = (req.query.search as string) || "";
    const isFeatured = req.query.isFeatured
      ? req.query.isFeatured === "true"
      : undefined;
    const sortedBy = (req.query.sortedBy as string) || "";
    const sortedOrder = (req.query.sortedOrder as string) || "";

    const result = await ProjectServices.getAllProject({
      page,
      limit,
      search,
      isFeatured,
      sortedBy,
      sortedOrder,
    });
    res.status(200).json({
      success: true,
      data: result,
      message: "Project retrieve successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve project",
      error: err instanceof Error ? err.message : err,
    });
  }
};

const getProjectById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await ProjectServices.getProjectById(id);
    res.status(200).json({
      success: true,
      data: result,
      message: "Project retrieve successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve project",
      error: err instanceof Error ? err.message : err,
    });
  }
};
const updateProjectById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await ProjectServices.updateProjectById(id, {
      title: req.body.title,
      content: req.body.content,
      thumbnail: req.body.thumbnail,
    });
    res.status(200).json({
      success: true,
      data: result,
      message: "Project updated successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to update project",
      error: err instanceof Error ? err.message : err,
    });
  }
};
const deleteProjectById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await ProjectServices.deleteProjectById(id);
    res.status(200).json({
      success: true,
      data: result,
      message: "Project deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to delete project",
      error: err instanceof Error ? err.message : err,
    });
  }
};

export const ProjectController = {
  createProject,
  getAllProject,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
