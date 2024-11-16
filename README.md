# TaskRabbit Backend Application
**Overview**
TaskRabbit is a backend application built using Node.js and the Express framework, following the Model-View-Controller (MVC) architecture. It provides essential features for user management, task organization, and secure image uploads.


----------------------


## Features

**1. User Registration and Authentication**

-User registration system with secure password handling.
-Token-based authentication using JSON Web Tokens (JWT) for secure access.
-Implements user schema to store user information in the database.

---------------------------------------------------------------

**2. User Profile**

-Allows users to update their profile information, including name, email, and other details.
-Real-time validation of user inputs.

------------------------------------------------------------

**3. Image Upload**

-Users can upload profile images.
-Image uploads are handled using the Multer package.
-Images are securely stored in the uploads folder on the server.
**4. Task Management**
-Enables users to create, update, delete, and manage tasks.
-Tasks are linked to individual users for a personalized experience.
-Implements a task schema to store task-related information in the database.

--------------------------------------------------------------------------

###Technologies Used


- **Backend:** Node.js, Express.js
- **Authentication:** JSON Web Tokens (JWT)
- **Image Uploads:** Multer
- **Database:** MongoDB
- **Architecture:** Model-View-Controller (MVC) pattern
