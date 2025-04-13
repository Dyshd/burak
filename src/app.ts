import express from "express";
import path from "path";
import router from "./router";
/* 1-ENTRANCE */
const app = express();
console.log("__dirname:",__dirname) 
app.use(express.static(path.join(__dirname, "public"))); //Middle DP => public ochiqlayabdi
app.use(express.urlencoded({extended: true}));  // MiddleWare DP => Traditional API 
app.use(express.json()); //Middle DP => Rest API
/* 2-SESSIONS */


/* 3-VIEWS */
app.set('views', path.join(__dirname, "views")); 
app.set("view engine", "ejs")

/* 4-ROUTERS */
app.use("/", router) // Middleware Design Pettern
export default app;



// API types CLUSTER - DATABASE - COLLECTION - DOCUMENT - DATASET
// API: Header | Body
// API: method: Get | Post