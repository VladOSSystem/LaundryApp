const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const passport = require('passport');
const env = require('./config/env');
// import routes
const MainRoute = require('./router/MainRoute');
const Profile = require('./router/Profile');
const Auth = require('./router/Auth');
const SetAction = require('./router/SetAction');
const Recovery = require('./router/Recovery');
const Messanger = require('./router/Messanger');
// importing DB connection
const dbConnection = require('./db/connect');


app.use( 
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize()); 
dbConnection();

require("./router/passport")(passport); 


app.use((req, res, next) => {
    res.setHeader('Access-control-Allow-Origin', '*')
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, DELETE, PUT, OPTIONS'
    )
    res.setHeader('Set-Cookie', 'HttpOnly;Secure;SameSite=Strict')
    // Allow client to set headers with Content-Type
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()
});

app.use('/api', MainRoute);
app.use('/api/profile', Profile);
app.use('/api/auth', Auth);
app.use('/api/set', SetAction);
app.use('/api/recovery', Recovery);
app.use('/api/mess', Messanger);

app.get('*', (req, res) => {
    res.status(404).send('None existens route');
});


const port = process.env.PORT || env.PORT;

app.listen(port, () => console.log(`Server up and running on port ${port}`));  