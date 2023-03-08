import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import logger from './config/winston';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from "express-rate-limit";
import RateLimitError from 'express-rate-limit';

import connectDB from './config/connectDB';
import clinicRouter from './routes/clinicRoutes';
import doctorRouter from './routes/doctorRoutes';
import authRouter from './routes/authRouters';
import patientRouter from './routes/patientRouters';
import historyRouter from './routes/historyRouters';
import extraoralRouter from './routes/extraoralRouters';
import intraoralRouter from './routes/intraoralRouters';
import radiographyRouter from './routes/radiographyRouters';
import diagnosisAndTreatmentRouters from './routes/diagnosisAndTreatmentRouters';
import listOfIssueRouter from './routes/listOfIssueRouters';
import treatmentPlanRouter from './routes/treatmentPlanRouters';
import treatmentHistoryRouter from './routes/treatmentHistoryRouters';
import sharePatientRouters from './routes/sharePatientRouters';

const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL_CLIENT
  })
)

app.use(helmet());
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 500, // limit each IP to 500 requests per windowMs
  legacyHeaders: true,
  message: "Too many requests from this IP, please try again in 5 minutes"
});

app.use(limiter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(morgan('dev', {stream: logger.app.stream.write}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// router setup
app.use('/v1/clinic', clinicRouter);
app.use('/v1/doctor', doctorRouter);
app.use('/v1/auth', authRouter);
app.use('/v1/patient', patientRouter);
app.use('/v1/history', historyRouter);
app.use('/v1/extraoral', extraoralRouter);
app.use('/v1/intraoral', intraoralRouter);
app.use('/v1/radiography', radiographyRouter);
app.use('/v1/diagnosis', diagnosisAndTreatmentRouters);
app.use('/v1/listOfIssue', listOfIssueRouter);
app.use('/v1/treatmentPlan', treatmentPlanRouter);
app.use('/v1/treatmentHistory', treatmentHistoryRouter);
app.use('/v1/sharePatient',sharePatientRouters);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if (err instanceof RateLimitError) {
    res.status(429).send(err.message);
  }
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

connectDB();

app.listen(process.env.PORT || 3000, ()=>{
  logger.app.info('server listening on port: ' + process.env.PORT || 3000);
})

module.exports = app;
