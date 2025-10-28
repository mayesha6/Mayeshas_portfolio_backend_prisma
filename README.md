# Personal Portfolio – Backend

A Node.js + Express + Prisma backend API for managing blogs, projects including CRUD operations, filtering, sorting, and pagination for Perdonal Portfolio.

## Tech Stack

Node.js – JavaScript runtime

Express.js – Web framework

Prisma ORM – Database ORM for PostgreSQL / MySQL / SQLite

TypeScript – Type safety

JWT – Authentication (optional)

CORS & Compression – Middleware for performance and security

## Project Structure
next-blog-backend/  
├── prisma/  
│   ├── schema.prisma  
│   └── migrations/  
├── src/  
│   ├── app.ts  
│   ├── server.ts  
│   ├── config/  
│   │   └── db.ts  
│   ├── modules/  
│   │   └── project/  
│   │       ├── project.controller.ts  
│   │       ├── project.service.ts  
│   │       └── project.routes.ts  
│   │   └── post/  
│   │       ├── post.controller.ts  
│   │       ├── post.service.ts  
│   │       └── post.routes.ts  
│   │   └── auth/  
│   │       ├── auth.controller.ts  
│   │       ├── auth.service.ts  
│   │       └── auth.routes.ts  
│   │   └── user/  
│   │       ├── user.controller.ts  
│   │       ├── user.service.ts  
│   │       └── user.routes.ts  
├── .env  
├── package.json  
├── tsconfig.json  
└── README.md  

### Installation & Setup  
1. Creation  
create a folder named by PrismaPortfolio    
open it in VS code  
create src folder and also other necessary folder and file like modules, app.ts, server.ts and so on  

2. Install dependencies  
npm install  

3. Create .env file  
PORT="5000"  
NODE_ENV="development"  
DATABASE_URL="postgresql://postgres:12345@localhost:5432/prisma_blog?schema=public"    

🗃️ Prisma Setup  

4. Generate Prisma Client  
npx prisma generate  

5. Push schema to database  
npx prisma db push  

6. Run Migrations  
npx prisma migrate dev --name init  

7. Open Prisma Studio (Database UI)  
npx prisma studio  

🧩 Scripts  
Command	Description    
npm run dev     	
npm run build    	
npm start    	
npx prisma studio    	
npx prisma generate    	
### API Overview  
🔹 Base URL  
http://localhost:5000/api/v1  

### Endpoints  
🔹 Project Endpoints  
Method	Endpoint	    Description  
POST	/project	    Create new project  
GET	    /project	    Get all projects (supports pagination, search, sorting)  
GET	    /project/:id	Get single project by ID  
PATCH	/project/:id	Update project  
DELETE	/project/:id	Delete project  

🔹 User Endpoints  
Method	Endpoint	Description  
POST	/user	    Create new user  
GET	    /user	    Get all users  
GET	    /user/:id	Get single user by ID  
PATCH	/user/:id	Update user  
DELETE	/user/:id	Delete user  

🔹 Auth Endpoints  
Method	Endpoint	Description  
POST	/auth/login	User logged in  

🔹 Post Endpoints  
Method	Endpoint	Description  
POST	/post	    Create new project  
GET	    /post	    Get all posts (supports pagination, search, sorting)  
GET	    /post/:id	Get single post by ID  
PATCH	/post/:id	Update post  
DELETE	/post/:id	Delete post  


### Error Handling  

All API responses follow a consistent structure:  

{  
  "success": false,  
  "message": "Failed to create project",  
  "error": "Error message here"  
}  

### Deployment  
1. Build for production  
    npm run build  

2. Start the production server  
    npm start  

3. Deploy  
    Vercel   