FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm intall
COPY . .

EXPOSE 8080
CMD ["npm", "start"]