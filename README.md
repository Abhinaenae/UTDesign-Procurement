# UTDesign-Procurement
## Pre-requisite for running the app locally
You must have the following tools installed:
- VSCode (recomended): https://code.visualstudio.com/download
- Node.js: https://nodejs.org/en/download/
- Prisma https://www.prisma.io/
- MYSql: https://www.mysql.com/downloads/

- MySQL Workbench: https://dev.mysql.com/downloads/workbench/
- Git (Linux): https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Git (Windows): https://gitforwindows.org/
- Git (MacOS): https://git-scm.com/download/mac


## Using Github Desktop instead of git will be easier to use. 
-Github Desktop:https://desktop.github.com/ 

## Helpfull videos to get learn
- Prisma: https://www.youtube.com/watch?v=RebA5J-rlwg

- Next.Js:  https://youtu.be/mTz0GXj8NN0

### API's
  
- https://www.youtube.com/watch?v=FMnlyi60avU
- https://www.youtube.com/watch?v=varePWkGi8Y&t
-  https://www.youtube.com/watch?v=J4pdHM-oG-s&t
-  https://youtu.be/GgzWFxIiwK4

### Dependenceies setup

To install dependecies, in terminal or VSCode, run  `cd procurement-manager/` to make sure that the terminal is in the procurement-manager folder and run `npm install`
 
   
## Database Setup
Downlading and setting up MYsql is required first. MySQL workbench is used then to manually add some data into the tables and can be used to further view changes done to the database

After downloading and installing everything, run `npx i` to download all the packages

The prisma file under the prisma folder had the schemea setup and can be eddited to change the database. Running `npx prisma migrate dev`  intially will set up the database. 
After making any changes to the database running `npx prisma migrate dev` will update the databse
- Some more documentation regarding this is provided at https://www.prisma.io/docs/concepts/components/prisma-migrate

## Future Todo list
-Continue developing API endpoints and integrating them with the front-end to provide full functionality of the application.

-APIs to work on: [final list of API endpoints.docx](https://github.com/UTDallasEPICS/UTDesign-Procurement/files/11426026/final.list.of.API.endpoints.docx)

-Implement the UTD SSO (Single Sign-On) feature for user authentication.

-Input data for Departments table.

-Start working on Orders History page.

-Work on improving the UI design of the web application based on user feedback and suggestions.

-The application still needs to have the feature of the project partner being able to add users, projects, and modify any data in the database.
