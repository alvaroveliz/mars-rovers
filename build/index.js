"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var fileName = process.argv.slice(2)[0];
var MarsRovers_1 = __importDefault(require("./MarsRovers"));
try {
    if (fs.existsSync(fileName)) {
        console.log("Reading input file: " + fileName);
        var marsRovers = new MarsRovers_1.default(fileName);
        marsRovers.deployRovers();
    }
}
catch (err) {
    console.log(err);
}
