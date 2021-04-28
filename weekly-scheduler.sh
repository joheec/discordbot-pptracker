#!/bin/bash
echo "Running weekly ($(date +%u)) scheduler script on $1 with board type, $2"
if [ "$(date +%u)" = 7 ]
then
    if [ $1 = "prod" ]
    then
        echo "[LOG] Bash script running on prod"
        NODE_ENV=prod USERS=10 BOARD_TYPE=$2 node index.js
    else
        echo "[LOG] Bash script not running on prod"
        NODE_ENV=dev USERS=10 BOARD_TYPE=$2 node index.js
    fi
else
    echo "[LOG] Run did not match schedule"
fi