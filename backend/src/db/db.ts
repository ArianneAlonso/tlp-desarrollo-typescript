import { IDatabaseAdapter } from "./IdbAdapter";
import { mongoadapter } from "./MongoAdapter";

export class Database {
  private static instance: Database;
  private adapter: IDatabaseAdapter;

  private constructor(adapter: IDatabaseAdapter) {
    this.adapter = adapter;
  }

  public static getInstance(adapter?: IDatabaseAdapter): Database {
    if (!Database.instance) {
      if (!adapter) {
        throw new Error("proporcionar un adapter");
      }
      Database.instance = new Database(adapter);
    }
    return Database.instance;
  }

  public async connect(uri: string): Promise<void> {
    await this.adapter.connect(uri);
  }

  public async disconnect(): Promise<void> {
    await this.adapter.disconnect();
  }
}

export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/typescript";
export const database = Database.getInstance(new mongoadapter());
