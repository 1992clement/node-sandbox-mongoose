# mangoose /node / mongoDB sandbox

## setup
```
  git clone https://github.com/1992clement/node-sandbox-mongoose.git
  cd node-sandbox-mongoose
  npm install
  docker-compose up -d
```

## logs
`docker-compose logs -f`

## Interfaces
- mongo acces : `mongodb://root:example@mongo:27017/test?authSource=admin`
- mongo UI : `localhost:3000`
- app : `localhost:8080`

## nosqlclient
[Doc here](https://www.nosqlclient.com/docs/)

## Functioning
The app produces a "Kitty" schema and model at runtime. Everytime localhost is hit, a new kitty is generated and inserted in mongoDB. Then, it logs al the kittens into the console.
