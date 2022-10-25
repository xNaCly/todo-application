#!/usr/bin/env bash


echo "# Stop everything"
docker-compose down --remove-orphans

echo "# Remove all volumes"
docker volume rm "${PWD##*/}_mariadb" || true


echo "# Get local ips and write into hosts"
rm -rf ./dev/hosts ./dev/hosts-nginx ./dev/hosts-tomcat

local_ip=$(ifconfig | grep 172.20 | sed "s/^.*inet \([0-9]*\.[0-9]*\.[0-9]*\.[0-9]*\) .*$/\1/g")
if [ -z "$local_ip" ]; then
	local_ip=$(ifconfig | grep 192 | sed "s/^.*inet \([0-9]*\.[0-9]*\.[0-9]*\.[0-9]*\) .*$/\1/g")
fi

echo "127.0.0.1 localhost" > ./dev/hosts
echo "$local_ip workstation tomcat" >> ./dev/hosts
echo "$local_ip workstation" >> ./dev/hosts-nginx
echo "$local_ip workstation local.egotec.com" >> ./dev/hosts-tomcat
echo "IP=$local_ip"

echo "# start docker-compose env and tomcat"
docker-compose pull
docker-compose up -d

echo "<= done"
echo "Open http://localhost"
