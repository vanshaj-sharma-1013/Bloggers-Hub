import mongoose from "mongoose";

// Assuming this file is located at /src/lib/DBconnect.ts
declare global {
  var mongoose:
    | { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
    | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// --- DEFINITIVE DEBUGGING LOGIC ---
if (MONGODB_URI) {
  // Redact the password part of the URI for security while logging.
  const maskedUri = MONGODB_URI.replace(
    /:\/\/(.*?):(.*?)@/,
    "://<username>:<password>@"
  );
  console.log(`[DB DEBUG] MONGODB_URI received by DBConnect: ${maskedUri}`);

  // Test the hostname Mongoose is trying to parse
  const match = MONGODB_URI.match(/@([^/?:,]+)/);
  const expectedHostname = match ? match[1] : "Host not found in URI format.";
  console.log(`[DB DEBUG] EXPECTED Hostname: ${expectedHostname}`);
}
// --- END DEBUGGING LOGIC ---

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents recreating connections every time.
 */
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalWithMongoose = global as typeof global & {
  mongoose?: MongooseCache;
};

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = { conn: null, promise: null };
}

const cached: MongooseCache = globalWithMongoose.mongoose;

async function DBConnect() {
  if (cached?.conn) {
    console.log("Using cached DB connection.");
    return cached.conn;
  }

  if (!cached?.promise) {
    const opts = {
      bufferCommands: false,
      autoCreate: false,
      autoIndex: false,
    };

    console.log("Creating new DB connection promise...");
    cached.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then((mongooseInstance: typeof mongoose): typeof mongoose => {
        cached.conn = mongooseInstance;
        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
    console.log("Successfully resolved DB connection.");
  } catch (e) {
    cached.promise = null;
    console.error("Failed to establish DB connection, clearing cache.", e);
    throw e; // Re-throw the error
  }

  return cached.conn;
}

export default DBConnect;
