FROM node:14

# Set the working directory
WORKDIR /app

# Add Node.js to PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install Angular CLI globally
RUN npm install -g @angular/cli@12

# Install application dependencies
COPY package.json /app/package.json
RUN npm install

# Add the application code
COPY . /app