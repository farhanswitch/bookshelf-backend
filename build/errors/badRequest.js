"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BadRequestError extends Error {
    constructor(message, name = "Bad Request") {
        super(message);
        this.name = name;
    }
}
exports.default = BadRequestError;
