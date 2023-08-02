#!/bin/bash

# FUNCTION TO CLEAN UP RESOURCES
cleanup() {
  echo "CLOSING BACKGROUND PROCESSES"
  pkill -P $$
  exit 1
}

# TRAP SIGINT SIGNAL
trap 'cleanup' SIGINT

# STATIC PREVIEW FOR THE TEMPLATES IS STORED IN "static" FOLDER. IF THERE'S NOT ONE, THEN CREATE ONE
if [ ! -d "static" ]; then
    mkdir static
fi

# STORING LOGS IN THE "log" FOLDER
if [ ! -d "log" ]; then
    mkdir log
    touch "log/email.log"
fi

# RUNNING "email dev" AT A SPECIFIC PORT NO. & FOR A DIRECTORY NAME
dir="examples"
port="5000"

email dev --dir "$dir" --port "$port" > log/email.log 2>&1 &

# VIEWING EMAIL DEV OUTPUT IN THE TERMINAL
tail -f log/email.log &

wait
