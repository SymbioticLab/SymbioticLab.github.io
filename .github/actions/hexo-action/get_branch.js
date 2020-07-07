const fs = require('fs');
const yaml = require('js-yaml');

try {
    let fileContents = fs.readFileSync(process.argv[process.argv.length - 1]);
    let data = yaml.safeLoadAll(fileContents);

    console.log(data['deploy']['branch']);
} catch (e) {
    console.log('master');
}
