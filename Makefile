install:
	npm ci

gendiff:
	node gendiff.js

lint:
	npx eslint

test-coverage:
	npm test -- --coverage