#!/bin/sh

docker-compose down
docker-compose build
docker-compose --env-file .env up
