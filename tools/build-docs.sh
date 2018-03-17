#!/bin/bash

# Go to project directory
cd $(dirname ${0})/..

# Base Source Path
if [ -d ~/material2 ] ; then
  echo "- Using path ~/material2"
  baseSrcPath=~/material2
elif [ -d ../new-rd-angular ] ; then
  echo "- Using path ../new-rd-angular"
  baseSrcPath=../new-rd-angular
elif [ -d ${MATERIAL2_LOCAL} ] ; then
  echo "- Using MATERIAL2_LOCAL env variable"
  baseSrcPath = ${MATERIAL2_LOCAL}
fi

# Build Docs
(cd ${baseSrcPath} && gulp docs)

# Build Examples
(cd ${baseSrcPath} && gulp material-examples:build-release)