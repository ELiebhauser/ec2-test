import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { db } from './daos/db';
import { employeeRouter } from './routers/employee.router';
import { adminRouter } from './routers/admin.router';

const app = express();

const port = process.env.PORT || 3001;
app.use(cors());
app.set('port', port);

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.setHeader("Access-Control-Allow-credentials", "true");
    response.setHeader('Access-Control-Allow-Headers', 'content-type')
    response.setHeader('Access-Control-Allow-Methods', 'GET POST PATCH');
    next();
})

app.use(bodyParser.json());

app.use('/employee', employeeRouter);
app.use('/admin', adminRouter);

process.on('unhandledRejection', () => {
    db.end().then(() => {
        console.log('Database pool closed.');
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});