#!/bin/bash

if [ -z "$1" ]; then
  echo "❌ Please provide a week number. Example: ./new-week.sh 03"
  exit 1
fi

WEEK_NUM=$(printf "%02d" $1)
FOLDER_NAME="week-$WEEK_NUM"

if [ -d "$FOLDER_NAME" ]; then
  echo "❗ $FOLDER_NAME already exists."
else
  cp -r challenge-template "$FOLDER_NAME"
  echo "✅ Created $FOLDER_NAME from template."
fi