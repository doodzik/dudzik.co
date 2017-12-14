
serve: clean
	NODE_PATH=. node build.js

build: clean
	PRODUCTION=true NODE_PATH=. node build.js

clean:
	rm -rf .tmp

install:
	pip install -r requirements.txt
	npm install

blog:
	./bin/blog ${TITLE}

dev:
	./bin/dev ${TITLE}

.PHONY: serve clean install build mini dev

