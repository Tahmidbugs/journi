import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pgk from 'googleapis';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import axios from 'axios';

dotenv.config();
const { google } = pgk;
const app = express();
const port = 5000 || process.env.PORT;

app.use(bodyParser.json());
app.use(cors());


const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

//database url
const url = 'mongodb+srv://journi:0fi7vBWz2Zr1W1NR@cluster0.bwmlgtl.mongodb.net/?retryWrites=true&w=majority';

//connect to application with database
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("MongoDB Connected"))
    .catch(err => console.log(err))



// google oAuth
app.get('/auth/google', (req, res) => {
    const url = getOAuthClient();
    res.redirect(url);
}
);
// user people api to get user profile
app.get('/auth/google/callback', (req, res) => {
    console.log("callback");
    const code = req.query.code;
    console.log(code);
    if (code) {
        getGoogleAccountFromCode(code).then((response) => {
            //TODO:  save user profile to database with name, email, picture in mongodb


        });
    } else {
        console.log("error");
        res.send("error");
    }
});

app.get('/search', async (req, res) => {
    console.log("search");
    const cityName = req.query.cityName;
    const tripStartDate = req.query.tripStartDate;
    const tripEndDate = req.query.tripEndDate;
    const interests = req.query.interests;

    const imageData = await getCityPictures(cityName);
    res.send(test);

});

async function getCityPictures(cityName) {
    console.log("getCityPictures");
    const params = {
        query: cityName,
        client_id: process.env.UNSPLASH_API_KEY,
        orientation: 'landscape',
    }

    const url = `https://api.unsplash.com/search/photos?query=${params.query}&client_id=${params.client_id}&orientation=${params.orientation}`;
    const response = await axios.get(url);
    const data = {
        url: response.data.results[0].urls.full,
        description: response.data.results[0].description

    }
    return data;





}


//  function to get user profile with name, email, picture
async function getGoogleAccountFromCode(code) {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    const { data } = await oauth2Client.request({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
        method: 'GET'
    });
    return data;
}

function getOAuthClient() {



    /**
     * To use OAuth2 authentication, we need access to a CLIENT_ID, CLIENT_SECRET, AND REDIRECT_URI
     * from the client_secret.json file. To get these credentials for your application, visit
     * https://console.cloud.google.com/apis/credentials.
     */

    // // Access scopes for read-only Drive activity.
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.profile',
    ];

    // Generate a url that asks permissions for the Drive activity scope
    const authorizationUrl = oauth2Client.generateAuthUrl({

        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'online',

        /** Pass in the scopes array defined above.
          * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
        scope: scopes,
        // Enable incremental authorization. Recommended as a best practice.
        include_granted_scopes: true
    });

    return authorizationUrl;
}

app.listen(port, () => console.log(`Server running on port ${port}`));