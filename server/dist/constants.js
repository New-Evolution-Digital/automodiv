"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__prod__ = void 0;
const dotenv_safe_1 = __importDefault(require("dotenv-safe"));
const { required, error, parsed } = dotenv_safe_1.default.config();
console.log(required, error, parsed);
exports.__prod__ = false;
//# sourceMappingURL=constants.js.map