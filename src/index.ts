import * as fs from 'fs';
import MarsRovers from './MarsRovers';

const fileName = process.argv.slice(2)[0];

try {
    if (fs.existsSync(fileName)) {
        console.log(`Reading input file: ${fileName}`);
        const marsRovers = new MarsRovers(fileName);
        marsRovers.deployRovers().then((data) => {
            marsRovers.showRoversPath();    
        });
    } else {
        console.log('File not found');
    }
} catch (err) {
    console.log(err);
}