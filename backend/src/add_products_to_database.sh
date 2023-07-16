#!/bin/bash

echo "Enter Name of the Database you Want to Import to Firestore: "
read name
firestore-import -a creds.json -b ${name}.json