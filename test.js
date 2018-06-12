const proxyquire = require('proxyquire');


const fsStub = {
    writeFile: (path, fileData, callback) => {
        console.log('path: ' + path);
        console.log('fileData: ' + fileData);
        callback();
    }
};

console.log('Testing Oddly Specific Fortunes:');
proxyquire('./update-oddly-specific-fortunes', { 'fs': fsStub });
console.log();

console.log('Testing Fortune Cookie:');
proxyquire('./update-fortune-cookie', { 'fs': fsStub });
console.log();