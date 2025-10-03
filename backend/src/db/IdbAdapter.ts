export interface IDatabaseAdapter {
    connect(uri:string): Promise<void>;
    disconnect(): Promise<void>;
}