"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rover = /** @class */ (function () {
    function Rover(posX, posY, direction) {
        this.position = { x: posX, y: posY };
        this.direction = direction;
        //console.log(`New rover landed at ${this.position.x}, ${this.position.y} - ${this.direction}`);
    }
    Rover.prototype.turnLeft = function () {
        switch (this.direction) {
            case 'N':
                this.direction = 'W';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'N';
                break;
            case 'W':
                this.direction = 'S';
                break;
        }
    };
    Rover.prototype.turnRight = function () {
        switch (this.direction) {
            case 'N':
                this.direction = 'E';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'E':
                this.direction = 'S';
                break;
            case 'W':
                this.direction = 'N';
                break;
        }
    };
    Rover.prototype.moveForward = function () {
        switch (this.direction) {
            case 'N':
                this.position.y += 1;
                break;
            case 'S':
                this.position.y -= 1;
                break;
            case 'E':
                this.position.x += 1;
                break;
            case 'W':
                this.position.x -= 1;
                break;
        }
    };
    Rover.prototype.move = function (commands) {
        for (var i = 0; i < commands.length; i++) {
            var command = commands.charAt(i);
            if (command === 'M') {
                this.moveForward();
            }
            else if (command === 'L') {
                this.turnLeft();
            }
            else if (command === 'R') {
                this.turnRight();
            }
            else {
                console.log(command + " is not a command, please enter M, R, or F.");
            }
        }
    };
    return Rover;
}());
exports.default = Rover;
