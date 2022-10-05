# Use a lighter version of Node as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# copy package.json into the container at /app
COPY package*.json /

# install dependencies
RUN npm ci

# Copy the current directory contents into the container at /app
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]