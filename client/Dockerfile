FROM node:22-alpine3.19

WORKDIR /app

COPY package.json .
# COPY package-lock.json .

RUN npm i

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]