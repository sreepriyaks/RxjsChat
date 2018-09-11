"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config = __importStar(require("../config.json"));
const path_1 = __importDefault(require("path"));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.initRoutes();
    }
    config() {
        this.app.set('port', config.default.port);
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
    initRoutes() {
        this.app.get('/', (req, res) => {
            res.status(200).send('Hi! Welcome to Smart Chat!');
        });
    }
}
exports.default = new App();
//# sourceMappingURL=app.js.map