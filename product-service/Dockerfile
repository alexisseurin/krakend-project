# Dockerfile Product-Service
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install express
COPY . .
EXPOSE 8000
CMD ["node", "index.js"]
