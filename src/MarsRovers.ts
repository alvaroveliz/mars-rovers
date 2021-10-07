import Plateau from './Plateau';

class MarsRovers {
    inputFile: string;
    plateau: any;

    constructor(inputFile: string) {
        this.inputFile = inputFile;
        this.plateau = null;
    }

    deployRovers() {
        const lineReader = require('readline').createInterface({
            input: require('fs').createReadStream(this.inputFile)
        });

        let n = 1;
        lineReader.on('line', (line: string) => {
            if (n === 1) {
                //console.log('Analyzing plateau...');
                const grid = line.split(' ');
                const gridX = parseInt(grid[0]);
                const gridY = parseInt(grid[1]);

                this.plateau = new Plateau(gridX, gridY);

                //console.log(`Grid detected: ${gridX}x${gridY}`);
            } else if (n % 2 === 0) {
                const roverData = line.split(' ');

                const roverX = parseInt(roverData[0]);
                const roverY = parseInt(roverData[1]);
                const roverD = roverData[2];

                //console.log(`Adding Rover at ${roverX}, ${roverY} facing ${roverD}`);
                this.plateau.addRover(roverX, roverY, roverD);
            } else {
                //console.log(`Sending instructions: ${line}`);
                this.plateau.activeRover.move(line);
                console.log(this.plateau.activeRover.position.x, this.plateau.activeRover.position.y, this.plateau.activeRover.direction);
            }
            //console.log('---'+line);
            n++;
        });
    }
}

export default MarsRovers;