const fs = require('fs');
const fileName = process.argv.slice(2)[0];

import MarsRovers from './MarsRovers';

try {
    if (fs.existsSync(fileName)) {
        console.log(`Reading input file: ${fileName}`);
        const marsRovers = new MarsRovers(fileName);
        marsRovers.deployRovers();
    }
} catch (err) {
    console.log(err);
}