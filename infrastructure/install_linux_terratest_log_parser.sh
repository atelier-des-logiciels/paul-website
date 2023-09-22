#!/bin/bash

VERSION="v0.41.11"

# This example assumes a linux 64bit machine
# Use curl to download the binary
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  PLATFORM="linux_amd64"
elif [[ "$OSTYPE" == "darwin"* ]]; then
  PLATFORM="darwin_amd64"
else
  echo "Unsupported OS: $OSTYPE"
  exit 1
fi

# Download the binary
curl --location --silent --fail --show-error -o terratest_log_parser https://github.com/gruntwork-io/terratest/releases/download/$VERSION/terratest_log_parser_$PLATFORM

# Make the downloaded binary executable
chmod +x terratest_log_parser
# Finally, we place the downloaded binary to a place in the PATH
sudo mv terratest_log_parser /usr/local/bin