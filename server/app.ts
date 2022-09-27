import './env.ts';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import indexRouter from './router/index';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join('dist')));
app.set('port', 5000);

app.use('/', indexRouter);

const server = app.listen(app.get('port'), function () {
  console.log('listening on port', app.get('port'));
});
