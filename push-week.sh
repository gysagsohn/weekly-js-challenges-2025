#!/bin/bash

if [ -z "$1" ]; then
  echo "❌ Please provide the week number and challenge name."
  echo "Usage: ./push-week.sh 01 'Rotate String'"
  exit 1
fi

WEEK=$1
CHALLENGE=$2

git add .
git commit -m "chore: complete week $WEEK - $CHALLENGE challenge"
git push origin main
