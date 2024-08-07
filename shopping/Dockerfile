FROM node

WORKDIR /app/shopping

COPY package.json .

RUN npm install

ENV MONGODB_URI='mongodb+srv://sajjad:sajjad@cluster0.thltkdn.mongodb.net/msytt_shopping?retryWrites=true&w=majority&appName=Cluster0'
ENV MSG_QUEUE_URL='amqps://piseekdh:4QpCQTo4LB8BFYnnx-C7-r753M-ZHnO_@lionfish.rmq.cloudamqp.com/piseekdh'
ENV EXCHANGE_NAME='ONLINE_STORE'
ENV PORT=8003
ENV APP_SECRET='mysupersecret'

COPY . .

EXPOSE 8003

CMD ["npm", "start"]