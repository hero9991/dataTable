FROM node:alpine
WORKDiR '/app'

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
CMD ['npm', 'start']