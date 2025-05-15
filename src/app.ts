import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin"
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { url } from "inspector";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "session",
});
/* 1-ENTRANCE */
const app = express();
app.use(express.static(path.join(__dirname, "public"))); //Middle DP => public ochiqlayabdi
app.use(express.urlencoded({extended: true}));  // MiddleWare DP => Traditional API 
app.use(express.json()); //Middle DP => Rest API
app.use(morgan(MORGAN_FORMAT));
/* 2-SESSIONS */
/* 2-SESSIONS */
app.use(
    session({
      secret: String(process.env.SESSION_SECRET),
      cookie: {
        maxAge: 1000 * 3600 * 3, // 3hrs
      },
      store: store,
      resave: true,
      saveUninitialized: true,
    })
  );
  

/* 3-VIEWS */
app.set('views', path.join(__dirname, "views")); 
app.set("view engine", "ejs")
/* 4-ROUTERS */
// SSR: EJS 
app.use("/admin", routerAdmin   )// SSR (EJS) 
app.use("/", router) // Middleware Design Pettern , SPA: REACT
export default app;



// API types CLUSTER - DATABASE - COLLECTION - DOCUMENT - DATASET
// API: Header | Body
// API: method: Get | Post