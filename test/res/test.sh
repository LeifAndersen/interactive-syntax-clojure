#!/usr/bin/env sh

npx git-http-mock-server start
chromium-browser --repl --disable-gpu $1
trap "npx git-http-mock-server stop" EXIT
