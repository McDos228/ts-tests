import app from "./app";
import {Config} from './config';

app.listen(Config.port, () => {
    console.log('listening on port ' + Config.port);
})