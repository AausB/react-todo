const moment = require('moment');

// formatted timestamp like
// 2017-06-26T08:07:23+02:00
console.log(moment().format());

// UNIX timestamps in seconds since 01.01.1970 00:00:00
let now = moment();
console.log('Current timestamp', now.unix());

// UNIX timestamps in milliseconds since 01.01.1970 00:00:00
let nowMilli = moment().valueOf();
console.log('Current timestamp in milliseconds', nowMilli);

let timestamp = 1498457809;
var currentMoment = moment.unix(timestamp);
console.log('current moment ', currentMoment.format('MMM D, YYYY @ HH:mm:ss'));
console.log('current moment ', currentMoment.format('DD.MM.YYYY @ HH:mm:ss'));

// format like January 3rd, 2017 @ 12:13 AM
console.log('current moment ', currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
