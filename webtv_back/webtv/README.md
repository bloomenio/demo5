#!/bin/bash
set -ev # Exit on first error, print all commands.
cd ~/fabric-dev-servers/webtv/
../teardownFabric.sh
docker rm $(docker ps -aq)
rm -rf ~/.composer/cards/
rm DevServer_connection.json
rm webtv@0.0.1.bna
## REST API http://localhost:3000
../startFabric.sh
../createPeerAdminCard.sh 
	# creates /tmp/PeerAdmin@hlfv1/

composer archive create -t dir -n .

composer network install --card PeerAdmin@hlfv1 --archiveFile webtv@0.0.1.bna

composer network start --networkName webtv --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file admin@webtv
	# ls ~/.composer/cards/
	# PeerAdmin@hlfv1/
composer card import --file admin@webtv
	# ls ~/.composer/cards/
	# admin@webtv/  PeerAdmin@hlfv1/
composer network ping -c admin@webtv
composer-rest-server -c admin@webtv -n never -w true

## Blockchain Explorer http://localhost:9090
cd ../blockchain-explorer
# Default MySQL password is '123456', make sure it's the same in ./config.json
mysql -uroot -p123456 < db/fabricexplorer.sql 
npm install
./start.sh

# docker logs 61f2d027af18(CONTAINER ID)