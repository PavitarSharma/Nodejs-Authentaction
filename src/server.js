import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./utils/db.js";
dotenv.config();

const PORT = process.env.PORT || 8000;

// MondoDB Database connection
(async () => {
  await connectDB();
})();

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
