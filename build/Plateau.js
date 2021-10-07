"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rover_1 = __importDefault(require("./Rover"));
var Plateau = /** @class */ (function () {
    function Plateau(gridX, gridY) {
        this.size = { x: gridX, y: gridY };
        this.rovers = [];
        this.activeRover = null;
    }
    Plateau.prototype.isValidPosition = function (x, y) {
        return (x > -1 && y > -1 &&
            x <= this.size.x &&
            y <= this.size.y);
    };
    Plateau.prototype.addRover = function (x, y, direction) {
        // Avoid rover collision on adding
        if (!this.isValidPosition(x, y)) {
            return false;
        }
        // Create rover.
        var rover = new Rover_1.default(x, y, direction);
        this.rovers.push(rover);
        // Set active rover last added
        this.activeRover = rover;
    };
    return Plateau;
}());
exports.default = Plateau;
