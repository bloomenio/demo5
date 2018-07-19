#!/bin/bash

cd fabric-dev-servers/
./startFabric.sh
./createPeerAdminCard.sh # creates /tmp/PeerAdmin@hlfv1/
# composer archive create -t dir -n .
cd ../webtv/
composer network install --card PeerAdmin@hlfv1 --archiveFile webtv@0.1.4.bna
composer network start --networkName webtv --networkVersion 0.1.4 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file admin@webtv  # ls ~/.composer/cards/ --> PeerAdmin@hlfv1/
composer card import --file admin@webtv # ls ~/.composer/cards/ --> admin@webtv/  PeerAdmin@hlfv1/
# composer network ping -c admin@webtv
composer-rest-server -c admin@webtv -n never -w true &

# To upgrade bna:
# # In package.json change version of bn (business network).
# cd ~/fabric-dev-servers/webtv/
# nano package.json
# # Package the new bn
# composer archive create -t dir -n .
# # Install the new bn
# composer network install -a webtv@0.0.5.bna -c PeerAdmin@hlfv1
# # Upgrade
# composer network upgrade -c PeerAdmin@hlfv1 -n webtv -V 0.0.5

# # TODO: redo it giving the new version as argument
