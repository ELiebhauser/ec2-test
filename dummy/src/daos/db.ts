import { Pool } from 'pg';
export const db = new Pool({
    database: 'postgres',
    host: process.env.P2_URL,
    port: 5432,
    user: process.env.P2_ADMIN,
    password: process.env.P2_PASS
});