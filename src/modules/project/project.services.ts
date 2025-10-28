import { Prisma, Project } from "@prisma/client";
import { prisma } from "../../config/db";

const createProject = async (payload: Prisma.ProjectCreateInput): Promise<Project> => {
 
  const createProject = await prisma.project.create({
    data: payload,
  });
  return createProject;
};



export const ProjectServices = {
  createProject,
  
};
