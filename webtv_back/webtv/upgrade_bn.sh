#!/bin/bash
# Check package.json -> change version of bn (business network)
nano package.json
# Package the new bn
composer archive create -t dir -n .
# Install the new bn
composer network install -a webtv@0.0.5.bna -c PeerAdmin@hlfv1
# Upgrade
composer network upgrade -c PeerAdmin@hlfv1 -n webtv -V 0.0.5

# TODO: redo it giving the new version as argument
