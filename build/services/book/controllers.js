"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../db"));
class BookController {
    constructor() {
        this.load = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield (0, db_1.default)("book").select("*");
                return res.status(200).json({ books });
            }
            catch (error) {
                next(error);
            }
        });
        this.add = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const writer = yield (0, db_1.default)("writer")
                    .select("writer_id")
                    .where("writer.name", (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.writer);
                const newBookID = yield (0, db_1.default)("book").insert({
                    title: (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.title,
                    year: (_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.year,
                    writer_id: writer[0].writer_id,
                    timestamp_created: db_1.default.fn.now(),
                });
                res.status(201).json({ book_id: newBookID, success: true });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new BookController();
