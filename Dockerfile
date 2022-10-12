### STAGE 1: Build ###
# Use a lighter version of Node as a parent image
FROM node:14 as build

# Set the working directory to /usr/src/app
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# copy package.json into the container at /app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json /usr/src/app

# install dependencies
RUN npm ci

# Copy the current directory contents into the container at /app
COPY . /usr/src/app


RUN npm run build



### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine

# Copy over the contents of our build directory to the directory Nginx serves by default
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Nginx will serve the on port 80 so we need to expose it
EXPOSE 80

# Run the app when the container launches
CMD ["nginx", "-g", "daemon off;"]