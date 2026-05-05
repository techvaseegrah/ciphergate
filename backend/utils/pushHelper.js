const webPush = require('web-push');

webPush.setVapidDetails(
  'mailto:support@ciphergate.com',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

module.exports = webPush;
