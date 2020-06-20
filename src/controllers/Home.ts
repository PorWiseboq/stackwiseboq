// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

import {Request, Response} from "express";
import Componentindex from "./components/index.js";
import Componentd1e3b3b2 from "./components/_d1e3b3b2.js";
import Component62b94b94 from "./components/_62b94b94.js";
import Componentd1e3b3b3 from "./components/_d1e3b3b3.js";

export const index = (req: Request, res: Response) => {
	if (req.method == "GET") {
		res.render("home/index", {
  	});
	} else {
		new Componentindex(req, res);
	}
};
export const _d1e3b3b2 = (req: Request, res: Response) => {
	if (req.method == "GET") {
		res.render("home/_d1e3b3b2", {
  	});
	} else {
		new Componentd1e3b3b2(req, res);
	}
};
export const _62b94b94 = (req: Request, res: Response) => {
	if (req.method == "GET") {
		res.render("home/_62b94b94", {
  	});
	} else {
		new Component62b94b94(req, res);
	}
};
export const _d1e3b3b3 = (req: Request, res: Response) => {
	if (req.method == "GET") {
		res.render("home/_d1e3b3b3", {
  	});
	} else {
		new Componentd1e3b3b3(req, res);
	}
};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.