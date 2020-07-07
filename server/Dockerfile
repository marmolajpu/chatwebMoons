FROM node:12-alpine3.11
RUN mkdir -p /svr/app/client-chat-server
WORKDIR /svr/app/client-chat-server
COPY package.json /svr/app/client-chat-server
RUN npm install
COPY . .

CMD ["npm", "start"]