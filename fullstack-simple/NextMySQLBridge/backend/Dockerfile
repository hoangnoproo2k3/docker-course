FROM node:18-alpine
WORKDIR /app_test
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]