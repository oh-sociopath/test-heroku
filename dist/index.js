"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const home_router_js_1 = require("./routes/home/home-router.js");
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(home_router_js_1.home_router);
app.get('/', (req, res) => {
    res.send('I\'m dead inside!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
