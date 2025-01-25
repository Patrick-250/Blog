import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test the database connection
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("Database connection successful!");
    connection.release();
  } catch (err) {
    console.error("Database connection failed:", err);
  }
})();