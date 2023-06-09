import express from 'express';
import routes from './routes';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import ejs from 'ejs';

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
        this.server.use(express.static(__dirname + '/public', { 
            setHeaders: function(res, path, stat) {
                if (path.endsWith('.css')) {
                    res.set('Content-Type', 'text/css');
                }
                else if (path.endsWith('.js')) {
                    res.set('Content-Type', 'application/javascript');
                }
            }
        }));
        
    }
    routes(){
        this.server.use(routes);
    }
}

export default new App().server;