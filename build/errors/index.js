"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandling {
}
ErrorHandling.handler = (err, req, res, next) => {
    const { name, message, data } = err;
    if (name === "Bad Request")
        return res.status(400).json({ name, message, details: data });
    else if (name === "Validation Failed")
        return res.status(422).json({ name, message, details: data });
    else if (name === "Not Found")
        return res.status(404).json({ name, message, details: data });
    else
        return res.status(500).json({
            name: "Internal Server Error",
            message: "Sorry, there were some technical issues while processing your request",
            details: err.message,
        });
};
exports.default = ErrorHandling;
