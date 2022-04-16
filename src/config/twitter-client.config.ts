import { TwitterApi } from 'twitter-api-v2';

export default new TwitterApi(process.env.TWITTER_BEARER_TOKEN ? process.env.TWITTER_BEARER_TOKEN : '');