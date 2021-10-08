import * as fs from 'fs';
import * as readline from 'readline';
import Plateau from './Plateau';

const inputMinLines = 3;

class MarsRovers {
    inputFile: string;
    plateau: any;

    constructor(inputFile: string) {
        this.inputFile = inputFile;
        this.plateau = null;
    }

    async deployRovers() {
        const inputData = fs.readFileSync(this.inputFile).toString();
        if (inputData.split('\n').length < inputMinLines) {
            throw new Error('Wrong file format');
        }

        const lines:any = await this.iterateLines();
        lines.forEach((line: any, n: number) => {
            if (n === 0) {
                // Analyzing plateau
                const grid = line.split(' ');

                if (grid.length !== 2) {
                    throw new Error('Plateau configuration should be "number number"');
                }
    
                const gridX = parseInt(grid[0]);
                const gridY = parseInt(grid[1]);
                this.plateau = new Plateau(gridX, gridY);
            } else if ((n+1) % 2 === 0) {
                const roverData = line.split(' ');
    
                if (roverData.length !== 3) {
                    throw new Error('Rover configuration should be "x y direction"');
                }

                const roverX = parseInt(roverData[0]);
                const roverY = parseInt(roverData[1]);
                const roverD = roverData[2];
    
                // Adding rover
                this.plateau.addRover(roverX, roverY, roverD);
            } else {
                this.plateau.activeRover.move(line);
            }
        });
    }

    async iterateLines() {
        let lines: string[] = [];
        const lineReader = readline.createInterface({
            input: fs.createReadStream(this.inputFile),
            terminal: false
        });

        return new Promise((resolve, reject) => {
            lineReader
            .on('line', function (line: string){
                lines.push(line);
            })
            .on('close', function () {
                resolve(lines);
            });
        })
    }

    async readInputLines() {
        const lineReader = readline.createInterface({
            input: fs.createReadStream(this.inputFile)
        });
        
        let lines: string[] = [];
        for await (const line of lineReader) {
            lines.push(line);
        }

        return lines;
    }

    showRoversPath() {
        this.plateau.rovers.forEach((rover: any) => {
            console.log(rover.position.x, rover.position.y, rover.direction);
        });
    }

}

export default MarsRovers;