serve: clean
	node build.js

build: clean
	PRODUCTION=true node build.js

clean:
	rm -rf .tmp

.PHONY: serve serve clean
