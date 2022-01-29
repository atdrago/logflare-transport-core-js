"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogflareHttpStreamClient = void 0;
var stream_1 = __importDefault(require("stream"));
var http_client_1 = require("./http_client");
var LogflareHttpStreamClient = /** @class */ (function (_super) {
    __extends(LogflareHttpStreamClient, _super);
    function LogflareHttpStreamClient(options) {
        return _super.call(this, options) || this;
    }
    LogflareHttpStreamClient.prototype.insertStream = function () {
        var self = this;
        var writeStream = new stream_1.default.Writable({
            objectMode: true,
            highWaterMark: 1,
        });
        writeStream._write = function (chunk, encoding, callback) {
            self.addLogEvent(chunk)
                .then(function () {
                callback(null);
            })
                .catch(callback);
        };
        return writeStream;
    };
    return LogflareHttpStreamClient;
}(http_client_1.LogflareHttpClient));
exports.LogflareHttpStreamClient = LogflareHttpStreamClient;
//# sourceMappingURL=http_stream_client.js.map