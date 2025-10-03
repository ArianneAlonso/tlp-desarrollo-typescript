import mongoose from "mongoose";
import { IDatabaseAdapter } from "./IdbAdapter";

export class mongoadapter implements IDatabaseAdapter {
    async connect(uri:string): Promise<void>{
        try{
            await mongoose.connect(uri);
        console.log("conectado con mongodb");
            }
        catch(error){
            console.error("error al conectarse a mongodb", error);
            throw error;
        }
    }
    async disconnect(): Promise<void>{
        await mongoose.disconnect();
        console.log("mongodb desconectado")
    }
}