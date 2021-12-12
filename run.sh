#!/bin/bash

PS3="Select how you would like to start your docker service: "

select opt in restart rebuild start quit;
do
    case $opt in
        restart)
            echo "destroying, rebuilding, and starting docker services"
            /bin/sh ./restart.sh
            ;;
        rebuild)
            echo "Rebuilding then starting docker services..."
            /bin/sh ./rebuild.sh
            ;;
        start)
            echo "Starting docker services..."
            /bin/sh ./start.sh
            ;;
        quit)
            break
            ;;
        *)
            echo "Invalid Option $REPLY"
            ;;
    esac
done