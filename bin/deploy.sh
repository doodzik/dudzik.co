#!/usr/bin/env bash
set -ev

if [ ! -e "./.tmp" ]; then
  echo ".tmp dir wasn't generated"
  exit 1
fi 

ncftp -u $FTP_USER -p $FTP_PASS $FTP_HOST <<< "
  put -R ./.tmp
  put ./.tmp/.htaccess
  mv ./current ./to_delete
  mv ./.tmp ./current
  rm -rf ./to_delete"
