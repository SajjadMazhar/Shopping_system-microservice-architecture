# Microservices in Node.Js & MongoDB
I have deployed the dockerized API services on Render
Base URI:- [gateway uri](https://shopping-gateway.onrender.com)

### Customer service endpoints
Description | Endpoints | Payload
--|--|--
Sign Up | POST /customer/signup | {email:string, password:string, phone:string}
Sign In | POST /customer/login | {email:string, password:string}
Insert Address | POST /customer/address | {stree:string, postalCode:string, city:string, country:string}
Get profile Info | GET /customer/profile | {}
Get shopping details | GET /customer/shopping-details | {}
Get wishlist | GET /customer/wishlist | {}

### Product service endpoints
Description | Endpoints | Payload
--|--|--
Create a product | /create | {name:string, desc:string, type:string, banner:string, unit:number, available:boolean, suplier:string}
Get products by category | /category/<type> | {}
Get product by ID | /<id> | {}
Add to wishlist | PUT /wishlist | {_id:string}
Remove from wishlist | DELETE /wishlist/<id> | {}
Add to Cart | PUT /cart | {_id:string, qty:number}
Remove from Cart | DELETE /cart/<id> | {}
Get all products | GET / | {}

### Shopping service endpoints
Description | Endpoints | Payload
--|--|--
Place the order | POST /shopping/order | {txnNumber:number}
Get placed orders | GET /shopping/orders | {}
Get user's cart | GET /shopping/cart | {}

## Design pattern
The following design pattern is being followed in each of the services.
![design pattern](https://github.com/SajjadMazhar/Shopping_system-microservice-architecture/blob/master/flowcharts/dp.png?raw=true)

## Resources used in development so far 
- Node.js
- Express.js
- MongoDB
- Microservices Architecture
- RabbitMQ (for communication between services)

## Microservice architecture
A flowchart demonstration of the microservices architecture with MongoDB in Node.js using a online shopping system.
![design pattern](https://github.com/SajjadMazhar/Shopping_system-microservice-architecture/blob/master/flowcharts/msc.png?raw=true)

## Publisher and Subscriber
A representation of how I have used the messaging queues(RabbitMQ) for communication among services 
![design pattern](https://github.com/SajjadMazhar/Shopping_system-microservice-architecture/blob/master/flowcharts/rmq.png?raw=true)

## Reverse Proxy
Replacing the gateway service with nginx reverse proxy
![design pattern](https://github.com/SajjadMazhar/Shopping_system-microservice-architecture/blob/master/flowcharts/rp.png?raw=true)
