import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import flash from "express-flash";
import path from "path";
import passport from "passport";
import bluebird from "bluebird";
import route from "./route";

// Create Express server
//
const app = express();

// Express configuration
//
app.use(session({
  secret: "&E7gLUZYMFJzzDNmXMXZWyiXDaqN7igA",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.set("port", process.env.PORT || 8000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

route(app);

export default app;