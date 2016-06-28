#!/bin/bash
set -ev

ncftp -u $FTP_USER -p $FTP_PASS $FTP_HOST <<< "
  put -R ./.tmp
  mv ./current ./to_delete
  mv ./.tmp ./current
  rm -rf ./to_delete"
