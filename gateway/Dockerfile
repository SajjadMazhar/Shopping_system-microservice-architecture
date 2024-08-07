FROM node

WORKDIR /app/gateway

COPY package.json .

RUN npm install

ENV PORT=8000

COPY . .

EXPOSE 8000

CMD ["npm", "start"]