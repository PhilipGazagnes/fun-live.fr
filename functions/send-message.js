const querystring = require('querystring');
const mailjet = require('node-mailjet').connect(
  process.env.MAILJET_APIKEY_PUBLIC,
  process.env.MAILJET_APIKEY_PRIVATE,
);

exports.handler = (event, context, callback) => {
  let body = {};

  try {
    body = JSON.parse(event.body);
  } catch (e) {
    body = querystring.parse(event.body);
  }

  mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: 'no-reply@veuve-michel.fr',
            Name: 'www.veuve-michel.fr',
          },
          To: [
            {
              Email: 'philip.gazagnes@gmail.com',
            },
            {
              Email: 'pramond163@orange.fr',
            },
          ],
          Subject: `${body.name} - contact site (email: ${body.email})`,
          HTMLPart: `Nom: ${body.name}<br>Email: ${body.email}<br>Tel: ${body.tel}<br><br>Message:<br>${body.message}`,
        },
      ],
    })
    .then(() => {
      console.log('SUCCESS. Message sent.');
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: 'success',
        }),
      });
    })
    .catch((err) => {
      console.log('ERROR. While sending message.');
      return callback(err);
    });
};
