import express from 'express';
import routes from './routes';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

class App{
    constructor(){
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors());
        this.server.use(bodyParser.urlencoded({extended:false}));
        this.server.use(express.json());
        this.server.use(bodyParser.json());
        this.server.set("view engine", "ejs");
        this.server.set("views", path.join(__dirname, "views"));
        this.server.use(express.static("src/public"));
    }
    routes(){
        this.server.use(routes);
    }
}

export default new App().server;