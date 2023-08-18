FROM node:16 AS build-stage
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run swagger-autogen

FROM node:16
WORKDIR /app
COPY --from=build-stage /app/dist /app/
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci
EXPOSE 3000
CMD ["node", "index.js"]
