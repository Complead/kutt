import env from "./server/env";

module.exports = {
  production: {
    client: "postgresql",
    connection: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      database: env.DB_NAME,
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      ssl: env.DB_SSL ? {
        rejectUnauthorized: false
      } : false,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "server/migrations"
    }
  }
};
