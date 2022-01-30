import stream from "stream"

import {LogflareHttpClient, LogflareUserOptionsI} from "./http_client"

class LogflareHttpStreamClient extends LogflareHttpClient {
    public constructor(options: LogflareUserOptionsI) {
        super(options)
    }

    public insertStream() {
        const self = this
        const writeStream = new stream.Writable({
            objectMode: true,
            highWaterMark: 1,
        })
        writeStream._write = function (chunk, encoding, callback) {
            self.addLogEvent(chunk)
                .then(() => {
                    callback(null)
                })
                .catch(callback)
        }
        return writeStream
    }
}

export {LogflareHttpStreamClient}
