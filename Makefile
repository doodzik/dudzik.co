
serve: clean
	node build.js

build: clean
	PRODUCTION=true node build.js

clean:
	rm -rf .tmp

install:
	pip install -r requirements.txt
	npm install

mini:
	./bin/mini ${TITLE}

dev:
	./bin/dev ${TITLE}

.PHONY: serve clean install build mini dev

