FROM node

WORKDIR /app/customer

COPY package.json .

RUN npm install

ENV MONGODB_URI='mongodb+srv://sajjad:<password>@cluster0.thltkdn.mongodb.net/msytt_customer?retryWrites=true&w=majority&appName=Cluster0'
ENV MSG_QUEUE_URL='amqps://...'
ENV EXCHANGE_NAME='ONLINE_STORE'
ENV PORT=8001
ENV APP_SECRET='mysupersecret'

COPY . .

EXPOSE 8001

CMD ["npm", "start"]