"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class notFoundError extends Error {
    constructor(message, data, name = "Not Found") {
        super(message);
        this.name = name;
        this.data = data;
    }
}
exports.default = notFoundError;
