setup:
	npm install -g @stoplight/prism-cli
	npm install

install:
	npm install

start:
	npm run dev

gen-client:
	npx openapi-codegen gen tetsu

start-mock:
	prism mock  --host=localhost --port=8003 ./swagger/openapi.yaml
