const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');


// configure the keys for accessing AWS
AWS.config.update({
  accessKeyId: SECRET,
  secretAccessKey: SECRET
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: SECRET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  return s3.upload(params).promise();
};

// Define POST route
app.post('/test-upload', (request, response) => {
  console.log('POST hit');

  const form = new multiparty.Form();
  form.parse(request, async (error, fields, files) => {
    if (error) throw new Error(error);
    try {
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = fileType(buffer);
      const timestamp = Date.now().toString();
      const fileName = `bucketFolder/${timestamp}-lg`;
      const data = await uploadFile(buffer, fileName, type);
      return response.status(200).send(data);
    } catch (error) {
      return response.status(400).send(error);
    }
  });
});

app.listen(process.env.PORT || 9000);
console.log('Server up and running...');

// const express = require('express');
// require('dotenv').config();

// const app = express();
// const bodyParser = require('body-parser');
// const sessionMiddleware = require('./modules/session-middleware');

// const passport = require('./strategies/user.strategy');

// // Route includes
// const userRouter = require('./routes/user.router');
// const uploadRouter = require('./routes/upload.router');

// // Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Passport Session Configuration //
// app.use(sessionMiddleware);

// // start up passport sessions
// app.use(passport.initialize());
// app.use(passport.session());

// /* Routes */
// app.use('/api/user', userRouter);
// app.use('/api/upload', uploadRouter);

// // Serve static files
// app.use(express.static('build'));

// // App Set //
// const PORT = process.env.PORT || 5000;

// /** Listen * */
// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`);
// });
