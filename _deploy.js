
const surge = require('surge');
surge({
  project: '.',
  domain: 'h2385qt-farm-pig.surge.sh'
}).then(() => {
  console.log('Deployed!');
}).catch(e => {
  console.error(e.message);
});
