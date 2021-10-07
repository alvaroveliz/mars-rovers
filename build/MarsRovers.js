"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Plateau_1 = __importDefault(require("./Plateau"));
var MarsRovers = /** @class */ (function () {
    function MarsRovers(inputFile) {
        this.inputFile = inputFile;
        this.plateau = null;
    }
    MarsRovers.prototype.deployRovers = function () {
        var _this = this;
        var lineReader = require('readline').createInterface({
            input: require('fs').createReadStream(this.inputFile)
        });
        var n = 1;
        lineReader.on('line', function (line) {
            if (n === 1) {
                //console.log('Analyzing plateau...');
                var grid = line.split(' ');
                var gridX = parseInt(grid[0]);
                var gridY = parseInt(grid[1]);
                _this.plateau = new Plateau_1.default(gridX, gridY);
                //console.log(`Grid detected: ${gridX}x${gridY}`);
            }
            else if (n % 2 === 0) {
                var roverData = line.split(' ');
                var roverX = parseInt(roverData[0]);
                var roverY = parseInt(roverData[1]);
                var roverD = roverData[2];
                //console.log(`Adding Rover at ${roverX}, ${roverY} facing ${roverD}`);
                _this.plateau.addRover(roverX, roverY, roverD);
            }
            else {
                //console.log(`Sending instructions: ${line}`);
                _this.plateau.activeRover.move(line);
                console.log(_this.plateau.activeRover.position.x, _this.plateau.activeRover.position.y, _this.plateau.activeRover.direction);
            }
            //console.log('---'+line);
            n++;
        });
    };
    return MarsRovers;
}());
exports.default = MarsRovers;
