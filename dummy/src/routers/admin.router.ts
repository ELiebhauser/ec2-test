import express from 'express';
import * as adminService from '../services/admin.service';

export const adminRouter = express.Router();

adminRouter.patch('', (request, response, next) => {
    const ticket = request.body;
    adminService.approveTicket(ticket)
        .then(approveTicket => {
            if(approveTicket) {
                response.json(approveTicket);
            }
        }).catch(err => {
            console.log(err);
            response.sendStatus(500);
        }).finally(() => {
            next();
        })
});