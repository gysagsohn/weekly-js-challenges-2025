# Weekly JS Challenges – 2025

Welcome to my weekly JavaScript challenge log.  
Each week, I’ll tackle a new challenge, document my thought process, and track my growth.

---

## Weekly Workflow

To create a new challenge folder from template:

``` bash
./new-week.sh [WEEK_NUMBER]
```

``` bash
#!/bin/bash

# Check if a week number was provided (e.g. ./new-week.sh 3)
if [ -z "$1" ]; then
  echo "❌ Please provide a week number. Example: ./new-week.sh 03"
  exit 1
fi

# Format the week number to always be two digits (e.g. 3 becomes 03)
WEEK_NUM=$(printf "%02d" $1)
FOLDER_NAME="week-$WEEK_NUM"

# Check if the folder already exists
if [ -d "$FOLDER_NAME" ]; then
  echo "❗ $FOLDER_NAME already exists."
else
  # If not, copy the template folder and create a new weekly folder
  cp -r challenge-template "$FOLDER_NAME"
  echo "✅ Created $FOLDER_NAME from template."
fi
```
