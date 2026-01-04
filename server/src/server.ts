import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
    });

    /* Routes */
  } catch (error) {
    console.log("Failed to run server", error);
    process.exit(1);
  }
}

startServer();
