import { Request, Response, NextFunction } from "express";

import connect from "../../db";

class BookController {
  load = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const books = await connect("book").select("*");
      return res.status(200).json({ books });
    } catch (error) {
      next(error);
    }
  };
  add = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const writer = await connect("writer")
        .select("writer_id")
        .where("writer.name", req?.body?.writer);
      const newBookID = await connect("book").insert({
        title: req?.body?.title,
        year: req?.body?.year,
        writer_id: writer[0].writer_id,
        timestamp_created: connect.fn.now(),
      });
      res.status(201).json({ book_id: newBookID, success: true });
    } catch (error) {
      next(error);
    }
  };
}

export default new BookController();
