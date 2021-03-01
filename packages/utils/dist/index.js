"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummy = void 0;
const moment_1 = __importDefault(require("moment"));
async function dummy() {
    return moment_1.default().format('yyyy-mm-dd');
}
exports.dummy = dummy;
