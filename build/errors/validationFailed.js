"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationFailedError extends Error {
    constructor(message, data, name = "Validation Failed") {
        super(message);
        this.name = name;
        this.data = data;
    }
}
exports.default = ValidationFailedError;
