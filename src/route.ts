// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

import * as homeController from './controllers/Home.js';

const route = (app: any) => {
 app.get("/", homeController.index);
 app.post("/", homeController.index);
 app.get("/authentication", homeController._d1e3b3b3);
 app.post("/authentication", homeController._d1e3b3b3);
 app.get("/authentication/role", homeController._b6eb1b83);
 app.post("/authentication/role", homeController._b6eb1b83);
 app.get("/bidder", homeController._8857ca68);
 app.post("/bidder", homeController._8857ca68);
 app.get("/bidder/auction", homeController._7e709334);
 app.post("/bidder/auction", homeController._7e709334);
 app.get("/blog/:category", homeController._c3da32d7);
 app.post("/blog/:category", homeController._c3da32d7);
 app.get("/blog/:id/:title", homeController._6ce794ec);
 app.post("/blog/:id/:title", homeController._6ce794ec);
 app.get("/blog/admin/:id", homeController._9d37c390);
 app.post("/blog/admin/:id", homeController._9d37c390);
 app.get("/buyer", homeController._b140e86b);
 app.post("/buyer", homeController._b140e86b);
 app.get("/buyer/auction", homeController._65e04a88);
 app.post("/buyer/auction", homeController._65e04a88);
 app.get("/buyer/auction/waiting", homeController._8a4a42e4);
 app.post("/buyer/auction/waiting", homeController._8a4a42e4);
 app.get("/error/:code", homeController._bbc7dba3);
 app.post("/error/:code", homeController._bbc7dba3);
 app.get("/buyer/auction/results", homeController._473d370d);
 app.post("/buyer/auction/results", homeController._473d370d);
}

export default route;

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.