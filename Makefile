serve: clean
	node build.js

build: clean
	PRODUCTION=true node build.js

clean:
	rm -rf .tmp

install:
	pip install -r requirements.txt
	npm install

.PHONY: serve serve clean
