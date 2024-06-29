# KrakenD API Gateway
![Image header](https://raw.githubusercontent.com/krakendio/.github/main/profile/header.png)

## Introduction

This repository holds a docker compose with the API gateway KrakenD (Community Edition). 

KrakenD is an open-source API gateway that simplifies the process of composing, routing, and aggregating microservices into a single RESTful JSON API. It helps you reduce latency, improve security, and streamline API management.

## Documentation
- [Community Edition](https://www.krakend.io/docs/overview/)  (open-source, unlimited use, corporate-grade features)
- [Enterprise Edition](https://www.krakend.io/docs/enterprise/overview/) (Extended functionalities, support, training, professional services)
- [First KrakenD configuration file krakend.json](https://designer.krakend.io).

## Commands

### Run
The docker run command runs a command in a new container, pulling the image if needed and starting the container.

```bash
docker run -it -p 8080:8080 -v PWD:/etc/krakend/ devopsfaith/krakend run --config /etc/krakend/krakend.json
```

Now see [http://localhost:8080/__health](http://localhost:8080/__health). The gateway is listening. 


### Start the services

```bash
docker-compose up [--build] [-d]
```

### Test the API Gateway
```bash
curl http://localhost:8002/users  # User-service
curl http://localhost:8003/products  # Product-service
curl http://localhost:8081/api/sites # JSON Placeholder API
```

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkrakendio%2Fkrakend-ce.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkrakendio%2Fkrakend-ce?ref=badge_large)