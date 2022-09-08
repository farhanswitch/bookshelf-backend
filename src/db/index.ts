import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

class ConnectToDB {
  static connect = knex({
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST as string,
      user: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string,
      port: (process.env.DB_PORT as unknown as number) || 3306,
      database: process.env.DB_NAME as string,
    },
  });
}

export default ConnectToDB.connect;
