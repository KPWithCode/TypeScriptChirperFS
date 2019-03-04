import * as mysql from "mysql";

import chirpsdb from './chirpsdb'

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'chirpr',
    password: 'chirpr',
    database: 'chirpr'
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
};

export default {
chirpsdb
}
