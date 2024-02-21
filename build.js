const fs = require('fs');
const { exec, spawn } = require('child_process');

if(fs.existsSync('site')) fs.rmSync('site', { recursive: true });

spawn('mkdocs', ['build'], { stdio: 'inherit' });