- docker build --tag truc1 .
- docker container run -d -p 3001:3000 truc1
- netstat -plnt #to see the mess with open tcp ports
- docker-compose up

# mevn-stack

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install
#maybe need to cd node_modules and ln -s ../myroutes . and ln -s ../mymodels .

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

following tutorial at: https://www.djamware.com/post/5a1b779f80aca75eadc12d6e/mongo-express-vue-nodejs-mevn-stack-crud-web-application
- for routes folder, you may have to announce it to npm packaging system:
 -> $ cd routes; sudo npm link; cd ..; npm link routes; chown -R ouam:ouam /usr/lib/node_modules/routes; remove package-lock and add "routes":"*" in package.json dependancies section and redo npm install
- for mogoose: remove 'useMongoClient' directive in app.js
- for mongodb related stuff:
maybe modify mongo stuff: authentication, ssl, host/port: mongo --host 127.0.0.1:27017

start mongodb (server) first and then mongo (CLI client for init and tests...):
$ chmod g+w /var/lib/mongodb (before )
$ sudo passwd mongodb ... // change mongodb user password
$ sudo usermod -a -G mongodb ouam ...// add mongodb group to me
$ sudo chmod g+w /var/log/mongodb/mongodb.log
$ sudo chmod g+w /var/log/mongodb
check that dbpath points to '/var/lib/mongodb' in /etc/mongodb.conf file and then:
$ sudo service mongod restart

Start first mongo sesion without --auth to create admin:
$ mongo
$ use admin
$ db.createUser({user: "mememe",pwd: "...",roles: [ { role: "root", db: "admin" }]})
//	 	roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
Then restart mongod with --auth option, and then in mongo cli (mongod --auth --port 27017 --dbpath /data/db1 mongo --port 27017 -u "mememe" -p "..." --authenticationDatabase "admin"):
use mven; //will create empty database 'mevn'
db.createUser({user: "mynewuser", pwd: "myuser123", roles: [ "readWrite", "dbAdmin" ] });
db.movie.insert({"name":"whatever"})
...Or check that in /etc/mongodb.conf, auth is first false and then true, and also port and host and restart service

dockerization:
docker-compose up -d
curl -i localhost:3001
docker exec -it mongo bash
check in mongo if paths lead to existing host db "mven" with existing collections (use meven; show collections in mongo)
docker-compose rm -fv mongodb -> delete volume with db created (careful) or use docker system prune
issues maybe with paths, ports, auths...
db appears to be persistent (adter down and re up, users still there...)
build 2 images separately and create a new docker-compose.yml for production that doesn't build but uses created images
when everything rocks, test with json more correctly formatted data than: curl -X POST -H "Content-type: application/json" http://localhost:3000/data/into/db -d '[ { "a": 1 }, { "b": 2 }, { "c": 3 } ]'
docker inspect <containerid> | grep "IPadress"
(mongo has to be connected to via container's ip adress as host. example: mongo mynewuser -p myuser123 --host 172.17.0.2 --port 27017)

ce qui marche:
$ docker volume ls; docker volume prune; docker volume ls;
$ docker run --name some-mongo -d mongo
$ docker inspect some-mongo  -> myip
$ docker run -it some-mongo bash
 $ mongo admin --host myip +-1
 $ create db user...


setups:
$ ctags -R static/ src/ myroutes/ mymodels/ *.js --tag-relative=yes
gvim javascript live debugging: ":Codi"

route debugging: $ DEBUG=express:* node truc.js (or put it in package.json scripts directives)
