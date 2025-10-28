import { Prisma, Project } from "@prisma/client";
import { prisma } from "../../config/db";

const createProject = async (payload: Prisma.ProjectCreateInput): Promise<Project> => {
 
  const createProject = await prisma.project.create({
    data: payload,
  });
  return createProject;
};

const getAllProject = async ({
  page = 1,
  limit = 10,
  search,
  techStack,
  sortedBy = "",
  sortedOrder,
}: {
  page?: number;
  limit?: number;
  search?: string;
  techStack?: string[];
  sortedBy?: string;
  sortedOrder?: string;
}) => {
  const skip = (page - 1) * limit;
  const where: any = {
    AND: [
      search && {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            content: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
      techStack && techStack.length > 0 && { techStack: { hasEvery: techStack } },
    ].filter(Boolean),
  };
  const result = await prisma.project.findMany({
    skip,
    take: limit,
    where,
    orderBy: sortedBy
      ? {
          [sortedBy]: sortedOrder,
        }
      : {
          createdAt: "desc",
        },
  });
  const total = await prisma.project.count({ where });
  return {
    data: result,
    meta: {
      page,
      limit,
      total,
      totalPage: Math.ceil(total / limit),
    },
  };
};


const getProjectById = async (id: number) => {
  const findProject = await prisma.$transaction(async (tx) => {
    const updateViews = await prisma.project.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });
    const result = await prisma.project.findUnique({
      where: {
        id,
      }
    });
    return result;
  });
  return findProject;
};
const updateProjectById = async (
  id: number,
  payload: Partial<Prisma.ProjectUpdateInput>
) => {
  const result = await prisma.project.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteProjectById = async (id: number) => {
  const result = await prisma.project.delete({
    where: {
      id,
    },
  });
  return result;
};


export const ProjectServices = {
  createProject,
  getAllProject,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
