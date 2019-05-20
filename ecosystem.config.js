const path = require('path');

module.exports = {
  apps:[{
    name: "node-sandbox-mangoose",
    script: "./public/main.js",
    autorestart: true,
    watch: path.resolve(__dirname, 'public'),
    logs: './logs/combined.outerr.log',
    max_memory_restart : '1G',
    instances : 1
  }]
}
