import { Router } from "express";

export const home_router = Router();

home_router.get('/home', (req, res) => {
    const homeResponse = {
        data: 'this is home page',
    };

    res.send(JSON.stringify(homeResponse));
})