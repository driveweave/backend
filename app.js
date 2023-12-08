var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morganLog = require('morgan');
const cors = require('cors')
const app = express()
const {COOKIE_PARSER_SECRET} = require('./config')
const usersRouterV1 = require('./routes/v1/users')
const {rateLimit} = require('express-rate-limit');
const CLIENT_ORIGINS = process.env.CLIENT_ORIGINS.split(', ')

app.use(cors({
    methods: 'GET, POST, DELETE',
    origin: CLIENT_ORIGINS,
    credentials: true
}));
const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 150,
    legacyHeaders: false,
    standardHeaders: 'draft-7'
})

app.set('trust proxy', 'loopback')
app.use(rateLimiter)
app.use(require('helmet')())
app.use(morganLog('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(COOKIE_PARSER_SECRET));

app.disable("etag");
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use('/api/v1/users/', usersRouterV1);

module.exports = app