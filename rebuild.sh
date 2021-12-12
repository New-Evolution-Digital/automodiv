#!/bin/sh

docker-compose build
docker-compose --env-file .env up