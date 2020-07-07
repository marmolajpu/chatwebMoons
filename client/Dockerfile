FROM node:12-alpine3.11
RUN mkdir -p /svr/app/client-chat
WORKDIR /svr/app/client-chat
COPY package.json /svr/app/client-chat
RUN npm install
COPY . /svr/app/client-chat

CMD ["npm", "start"]