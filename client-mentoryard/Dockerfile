# background os for container
FROM node:15.13-alpine

# photo to place our app
WORKDIR /client-mentoryard

# env module path for docker
ENV PATH="./node_modules/.bin:$PATH" 

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Run the build command
RUN vite build

# Specify the command to run when the container starts
CMD [ "npm", "start" ]