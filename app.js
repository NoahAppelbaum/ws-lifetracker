"use strict";

import express from "express";
import expressWs from "express-ws";

const app = express();

/** Handle persistent connection to /[roomID] room */
app.ws("/:roomID", (ws, req) => {

})
