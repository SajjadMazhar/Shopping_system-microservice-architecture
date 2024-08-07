FROM node

WORKDIR /app/products

COPY package.json .

RUN npm install

ENV MONGODB_URI='mongodb+srv://sajjad:<password>@cluster0.thltkdn.mongodb.net/msytt_product?retryWrites=true&w=majority&appName=Cluster0'
ENV MSG_QUEUE_URL='amqps://...'
ENV EXCHANGE_NAME='ONLINE_STORE'
ENV PORT=8002
ENV APP_SECRET='mysupersecret'

COPY . .

EXPOSE 8002

CMD ["npm", "start"]