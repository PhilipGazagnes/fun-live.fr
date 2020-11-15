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
    .post('contact', { version: 'v3' })
    .request({
      Email: body.email,
    })
    .then((contactCreationResult) => {
      const contactId = contactCreationResult.body.Data[0].ID;
      console.log(`SUCCESS. Contact created, id: ${contactId}`);
      mailjet
        .post('contact', { version: 'v3' })
        .id(contactId)
        .action('managecontactslists')
        .request({
          ContactsLists: [
            {
              Action: 'addforce',
              ListID: '19784',
            },
          ],
        })
        .then(() => {
          console.log('SUCCESS. Contact added to the mailing list.');
          return callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              message: 'success',
            }),
          });
        })
        .catch((err) => {
          console.log(
            'ERROR. While attepting to subscribe a freshly created contact to the mailing list.',
          );
          return callback(err);
        });
    })
    .catch((err) => {
      console.log('ERROR. While attepting to create a new contact.');
      return callback(err);
    });
};
