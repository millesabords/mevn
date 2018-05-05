FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY app.js ./
COPY myroutes ./myroutes
COPY mymodels ./mymodels
COPY package*.json /usr/src/app/
RUN npm install
RUN cd node_modules/ && ln -s ../mymodels mymodels && ln -s ../myroutes myroutes && cd ..
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]
