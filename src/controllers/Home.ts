// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

import {Request, Response} from "express";
import Componentindex from "./components/index.js";

export const index = (req: Request, res: Response) => {
	if (req.method == 'GET') {
		res.render("home/index", {
  	});
	} else {
		new Componentindex(req, res);
	}
}

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.