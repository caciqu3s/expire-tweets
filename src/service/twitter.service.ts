import { TwitterApi } from "twitter-api-v2";
import fs from 'fs';

export class TwitterService {
    private twitterClient!: TwitterApi;

    constructor(twitterClient: TwitterApi) {
        this.twitterClient = twitterClient;
    }

    public async getTweets(): Promise<any> {
        let currentUserResponse = await this.twitterClient.currentUserV2()
        //const tweetsResponse = await this.twitterClient.v2.userTimeline(currentUserResponse.data.id, { exclude: 'replies' });

        return Promise.resolve(currentUserResponse);
    }

    public async sendTweet(): Promise<any> {
        let mediaId = await this.twitterClient.v1.uploadMedia(fs.readFileSync('./../../assets/migao.jpg'));
        let tweet = await this.twitterClient.v2.tweet('Eba, Segunda-Feira', { media: { media_ids: [ mediaId ]}} );

        return tweet;
    }
}