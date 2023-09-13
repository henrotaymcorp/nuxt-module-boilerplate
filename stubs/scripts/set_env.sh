#!/bin/bash

true > .env && \
doppler secrets download \
  --project "trustup-io-app-commons" \
  --config local \
  --no-file \
  --format env | grep 'NUXT_' \
  >> .env
doppler secrets download \
  --project "{{{{moduleName}}}}" \
  --config local \
  --no-file \
  --format env | grep -v '^DOPPLER_' \
  >> .env