import express, { Application } from 'express';
import cron from 'node-cron';
import { TwitterService } from './src/service/twitter.service';
import twitterClient from './src/config/twitter-client.config'; 

require('dotenv').config()

const app: Application = express();

app.use(express.json());

cron.schedule('* * * * *', () => {
    console.log('Start method')
    let twitterService = new TwitterService(twitterClient);
    twitterService.sendTweet().then(data => console.log(data))
});

app.listen(8080, () => console.log('Server started at port 8080'));