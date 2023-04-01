const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require("helmet");
const crypto = require("crypto");
const hbs = require('hbs');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const docsRouter = require('./routes/docs');
const docsIgniteRouter = require('./routes/docs_ignite');
const docsSyncRouter = require('./routes/docs_sync');
const docsTextRouter = require('./routes/docs_text');
const docsConditionalRouter = require('./routes/docs_conditional');
const docsClickRouter = require('./routes/docs_click');
const docsForRouter = require('./routes/docs_for');
const docsMaskRouter = require('./routes/docs_mask');
const docsClassRouter = require('./routes/docs_class');
const docsHrefRouter = require('./routes/docs_href');
const docsGettersRouter = require('./routes/docs_getters');
const docsSettersRouter = require('./routes/docs_setters');
const docsIgnitedRouter = require('./routes/docs_ignited');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.localsAsTemplateData(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    res.locals.cspNonce = crypto.randomBytes(16).toString("hex");
    next();
});
app.use(helmet());
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            scriptSrc: ["'self'", (req, res) => `'nonce-${res.locals.cspNonce}'`]
        },
    })
);

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/docs', docsRouter);
app.use('/docs/ignite', docsIgniteRouter);
app.use('/docs/sync', docsSyncRouter);
app.use('/docs/text', docsTextRouter);
app.use('/docs/conditional', docsConditionalRouter);
app.use('/docs/click', docsClickRouter);
app.use('/docs/for', docsForRouter);
app.use('/docs/mask', docsMaskRouter);
app.use('/docs/class', docsClassRouter);
app.use('/docs/href', docsHrefRouter);
app.use('/docs/getters', docsGettersRouter);
app.use('/docs/setters', docsSettersRouter);
app.use('/docs/ignited', docsIgnitedRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', {layout: 'error_layout.hbs'});
});

module.exports = app;
