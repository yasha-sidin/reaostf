#!/bin/sh
docker compose exec -T adb adb "$@"
