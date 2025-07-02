import mongoose from "mongoose";

export const dbConnection = () => {
  const mongoURI = process.env.MONGO_URI;
  
  if (!mongoURI) {
    console.error("❌ MONGO_URI environment variable is not set!");
    process.exit(1);
  }

  mongoose
    .connect(mongoURI, {
      dbName: "PORTFOLIO",
      // Production connection options
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      bufferCommands: false,
      bufferMaxEntries: 0,
    })
    .then(() => {
      console.log("✅ Connected to MongoDB database!");
      console.log(`📊 Database: ${mongoose.connection.db.databaseName}`);
    })
    .catch((err) => {
      console.error("❌ Database connection error:", err.message);
      process.exit(1);
    });

  // Handle connection events
  mongoose.connection.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('⚠️ MongoDB disconnected');
  });

  mongoose.connection.on('reconnected', () => {
    console.log('✅ MongoDB reconnected');
  });
};