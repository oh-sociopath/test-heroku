"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home_router = void 0;
const express_1 = require("express");
exports.home_router = (0, express_1.Router)();
exports.home_router.get('/home', (req, res) => {
    const homeResponse = {
        data: 'this is home page',
    };
    res.send(JSON.stringify(homeResponse));
});
