/// <reference types="node" />
import stream from "stream";
import { LogflareHttpClient, LogflareUserOptionsI } from "./http_client";
declare class LogflareHttpStreamClient extends LogflareHttpClient {
    constructor(options: LogflareUserOptionsI);
    insertStream(): stream.Writable;
}
export { LogflareHttpStreamClient };
