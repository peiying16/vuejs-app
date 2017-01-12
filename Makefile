all: build

build:
	npm install
	docker-compose -f resources/docker-compose.yml build

run:
	docker-compose -f resources/docker-compose.yml up

.PHONY: build run
