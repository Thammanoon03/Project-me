const http = require('http');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const flash = require('express-flash');
const session = require('express-session');
const mysql = require('mysql');
const connection = require('./lib/db'); // ควรเป็น lib แทน lid ถ้าไม่ใช่ให้แก้เป็น lid

const indexRouter = require('./router/index');
const usersRouter = require('./router/users');
const bookRouter = require('./router/book');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(session({
    cookie: { maxAge: 60000 },
    store: new session.MemoryStore(),
    saveUninitialized: true,
    resave: true,
    secret: 'secret'
}));

app.use(flash());

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/book', bookRouter);

app.listen(8000, () => {
    console.log('Run server 8000');
});
