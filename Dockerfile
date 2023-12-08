FROM node:20.9.0-alpine3.17
WORKDIR /usr/driveweave
COPY ./package.json .
RUN npm install
COPY ./ .