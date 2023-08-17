#!/bin/bash
set -e

export CONFIG_DESTINATION_FOLDER="build/static/js"
# generate config file
if [ ! -d "$CONFIG_DESTINATION_FOLDER" ]; then
  mkdir -p "$CONFIG_DESTINATION_FOLDER"
fi
touch "$CONFIG_DESTINATION_FOLDER/config.js"
envsubst <config.js >"$CONFIG_DESTINATION_FOLDER/config.js"
echo "config file created"

#generate nginx conf
mkdir -p /etc/nginx/
cat nginx.conf | envsubst '$PORT' >/etc/nginx/nginx.conf
echo "nginx config file created"
exec nginx
