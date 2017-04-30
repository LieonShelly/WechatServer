const createHandler = require('github-webhook-handler');
const handler = createHandler({
    path: '/',
    secret: 'webhookSecret'
});
const rumCommand = (cmd, args, callback) => {
    const child = spawn(cmd, args)
    let response = ''
    child.stdout.on('data', buffer => response += buffer.toString())
    child.stdout.on('end', () => callback(response))
}

handler.on('error', error => {
    console.log('error', error => {
        console.log(error.message);
    });
});
handler.on('push', event => {
    rumCommand('sh', ['./auto_build.sh'], txt => {
        console.log(txt);
    })
});
module.exports = handler;