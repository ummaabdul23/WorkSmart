---

# **WorkSmart** - Connecting Teachers and Students Seamlessly

**WorkSmart** is an online platform designed to streamline the process of homework submission and feedback between teachers and students. The platform allows teachers to create assignments, track submissions, and provide feedback, while students can submit homework and receive grades in a simple, user-friendly interface.

---

## **Features**

- **Teacher Dashboard**: 
  - Create homework assignments with due dates.
  - View and grade student submissions.
  - Provide feedback on submitted homework.

- **Student Dashboard**:
  - Submit homework directly through the platform.
  - View assigned homework and upcoming deadlines.
  - Receive grades and feedback from teachers.

---

## **Tech Stack**

- **Front-End**: HTML5, CSS3, JavaScript (Vanilla)
- **Back-End**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Token) for user authentication and role-based access control

---

## **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ummaabdul23/worksmart.git
   cd worksmart
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MySQL database**:
   - Create a MySQL database and update the `.env` file with your database credentials.
   ```bash
   DB_HOST=your-db-host
   DB_USER=your-db-user
   DB_PASS=your-db-password
   DB_NAME=worksmart_db
   JWT_SECRET=your_jwt_secret
   ```

4. **Run migrations** to create the necessary database tables:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the server**:
   ```bash
   npm start
   ```

6. **Access the application**:
   - Navigate to `http://localhost:5000` in your browser.

---

## **API Endpoints**

- **POST** `/api/auth/register` - Register a new user (teacher or student)
- **POST** `/api/auth/login` - Login and get JWT token
- **POST** `/api/homework/create` - Create homework (Teacher)
- **POST** `/api/homework/submit` - Submit homework (Student)

---

## **Future Improvements**

- Add real-time notifications for upcoming homework deadlines.
- Improve security with OAuth authentication.
- Integrate advanced grading and analytics tools for teachers.
- **GET** `/api/homework` - Get homework details (Student)
- **POST** `/api/homework/grade` - Grade homework and provide feedback (Teacher)

---

## **Contributors**

- **Ummahani Abdurrazzaq** - Developer

---

## **License**

This project is licensed under the MIT License.