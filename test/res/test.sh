#!/usr/bin/env sh

(cd test/res; npx git-http-mock-server start)
chromium-browser --repl --disable-gpu $1
trap "(cd test/res; npx git-http-mock-server stop)" EXIT
