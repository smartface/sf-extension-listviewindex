#!/usr/bin/env bash

npx jsdoc2md -f ./analysis.js > api.md
node -e "const fs=require('fs'); const re=/amcE/g; const content = fs.readFileSync('./api.md', 'utf8'); const result = content.replace(re, 'amce'); fs.writeFileSync('./api.md', result, 'utf8');"
