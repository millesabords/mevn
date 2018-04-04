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
$ sudo service mongodb restart
$ mongo
use mven; //will create empty database 'mevn'
db.createUser({user: "mynewuser", pwd: "myuser123", roles: [ "readWrite", "dbAdmin" ] });
db.movie.insert({"name":"whatever"})

setups:
$ ctags -R static/ src/ myroutes/ mymodels/ *.js --tag-relative=yes
gvim javascript live debugging: ":Codi"

route debugging: $ DEBUG=express:* node truc.js (or put it in package.json scripts directives)
