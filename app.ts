import * as express from 'express';
import * as bodyParser from 'body-parser';
import {mainRoutes} from './routes/index';
import {mongoose, connect} from 'mongoose';
import {Config} from './config'

class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
    }

    private connectToMongo() {
        connect(Config.mongoConn, {
            db: { safe: true }
        }).then(()=>{
            console.log('connected');
        }).catch(err=>{
            console.log(err)
        })
    }

    private config(): void {
        this.connectToMongo();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use('/', mainRoutes)
    }
}

export default new App().app;