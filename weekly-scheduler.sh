#!/bin/bash
echo "Running weekly ($(date +%u)) scheduler script on ${env}"
if [ "$(date +%u)" = 7 ]
then
    if [ "$(env)" = "prod" ]
    then
        NODE_ENV=prod USERS=10 node index.js
    else
        NODE_ENV=dev USERS=10 node index.js
    fi
fi