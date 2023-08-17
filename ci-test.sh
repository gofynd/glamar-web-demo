set -x
apk add --quiet --no-cache chromium curl git nodejs npm openssh
node coverage_output.js
