#!/bin/bash
set -o nounset -o pipefail

REPO_URL=https://gitlab.com/inverse-inc/packetfence/-/jobs/artifacts/devel/download?job=pages
ZIP_FILE=$(mktemp --suff=".zip")

# get root of git directory
DIR=$(pwd | grep -oP '.*?(?=ci/lib/test)')

if ! type curl 2> /dev/null ; then
  echo "Install curl before running this script"
  exit 1 
fi

# Download the archive zipfile, extract and remove
curl -Ls ${REPO_URL} --output ${ZIP_FILE}
if [ -f ${ZIP_FILE} ]; then
  echo "Public zipfile is there"
  unzip -oq ${ZIP_FILE} -d ${DIR}
  echo "Unzip is done"
  rm -f ${ZIP_FILE}
  echo "Zipfile is removed"
  exit 0
else
  echo "The zipfile is no available"
  exit 1
fi
