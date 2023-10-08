FROM node:14

# Set the working directory
WORKDIR /workspaces

# Add Node.js to PATH
ENV PATH /workspaces/node_modules/.bin:$PATH

# Install Angular CLI globally
RUN npm install -g @angular/cli@9

# Install application dependencies
COPY package.json /workspaces/package.json
RUN npm install

# Add the application code
COPY . /workspaces