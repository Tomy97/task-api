import dotenv from "dotenv";
dotenv.config();
export const config = {
  // Conexion a la base de datos
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "taskdb",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  dialect: process.env.DB_DIALECT || "mysql",
  // Configuracion seeds
  seederStorage: "sequelize",
  seederStorageTableName: "seeders",
  // Configuracion de las migraciones
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
  define: {
    timestamps: false,
    // generador de claves foreaneas en este tipo user_id en vez de userId
    underscored: true,
  }
};
