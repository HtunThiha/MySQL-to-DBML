const { exec } = require('child_process');
const dbSetting = require('./db.js');

const covertCmd = `db2dbml mysql 'mysql://${dbSetting.user}:${dbSetting.password}@${dbSetting.host}:${dbSetting.port}/${dbSetting.database}' -o output.dbml`;

exec(`powershell.exe -Command "${covertCmd}"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Standard Error: ${stderr}`);
        return;
    }
    console.log(`Output: ${stdout}`);
});

// Open the generated schema.dbml in VS Code
exec('powershell.exe -Command "code output.dbml"');

process.removeAllListeners('warning');