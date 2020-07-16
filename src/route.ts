// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

import * as homeController from './controllers/Home.js';

const route = (app: any) => {
 app.get("/", homeController.index);
 app.post("/", homeController.index);
 app.get("/authentication", homeController._d1e3b3b3);
 app.post("/authentication", homeController._d1e3b3b3);
 app.get("/buyer", homeController._b140e86b);
 app.post("/buyer", homeController._b140e86b);
 app.get("/bidder", homeController._8857ca68);
 app.post("/bidder", homeController._8857ca68);
 app.get("/bidder/auction", homeController._7e709334);
 app.post("/bidder/auction", homeController._7e709334);
 app.get("/buyer/auction", homeController._65e04a88);
 app.post("/buyer/auction", homeController._65e04a88);
 app.get("/authentication/role", homeController._b6eb1b83);
 app.post("/authentication/role", homeController._b6eb1b83);
 app.get("/blog/admin/:id", homeController._9d37c390);
 app.post("/blog/admin/:id", homeController._9d37c390);
 app.get("/blog/:id/:title", homeController._6ce794ec);
 app.post("/blog/:id/:title", homeController._6ce794ec);
}

export default route;

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.