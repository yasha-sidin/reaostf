##### Build Stage #####
FROM node:22-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Install build dependencies
RUN apk update
RUN apk add build-base cmake musl python3

# Copy package.json and package-lock.json to install dependencies
COPY package*.json .

# Install app dependencies
RUN npm install

##### Runtime Stage #####
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Install the required packages
RUN apk update
RUN apk add --no-cache coreutils musl

# Copy the build stage files to the runtime stage
COPY --from=build /app/node_modules ./node_modules