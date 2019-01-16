import * as express from 'express';
import * as bodyParser from 'body-parser';
import {mainRoutes} from './routes/index';
import {connect} from 'mongoose';
import {Config} from './config'

class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
    }

    private async connectToMongo() {
        try {
            const conn = await connect(Config.mongoConn);
            if(conn) console.log('connected');    
        } catch (error) {
            console.log(error)
        }
    }

    private config(): void {
        this.connectToMongo();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use('/', mainRoutes)
    }
}

export default new App().app;