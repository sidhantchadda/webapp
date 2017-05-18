FROM node:boron

# Create app Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Install app dependencies
COPY package.json /usr/src/app
RUN npm install

#Build app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
