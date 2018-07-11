#!/bin/bash
set -e  # To exit on first error.

# Cleaning.
# docker rmi $(docker images)
if [ "$(docker ps -aq)" > /dev/null ];then docker kill $(docker ps -aq); docker rm $(docker ps -aq); fi
# Shutdown any programs listening on ports 3000, 9090, of localhost.
if [ "$(lsof -ti :3000,9090)" > /dev/null ];then kill -9 $(lsof -ti :3000,9090); fi

echo "Running Anonymous Personalization Demo of plenary meeting in Cyprus, June 2018..."
pwd=$PWD
cd webtv_back/
if [ -f nohup.out ]; then rm nohup.out; fi
nohup /bin/bash ./run.sh &
while [ "$(tail -1 nohup.out)" != "Browse your REST API at http://localhost:3000/explorer" ];do sleep 5; done
nohup /bin/bash ./run-explorer.sh &
while [ "$(tail -1 nohup.out)" != "Please open Internet explorer to access ：http://localhost:9090/" ];do sleep 5; done
cd $pwd/webtv_front/
nohup /bin/bash input_data.sh &
sleep 10
/bin/bash run-front-end.sh &
