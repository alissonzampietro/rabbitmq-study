FROM node:alpine
WORKDIR /app/
COPY . /app/
RUN ls -la /app/
RUN npm install
