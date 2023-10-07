FROM node:14

WORKDIR /workspace

RUN npm install -g @angular/cli@9
RUN npm install
CMD npm start