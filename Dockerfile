FROM node:22-slim AS build

WORKDIR /app

COPY package.json package-lock.json* .npmrc* ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build:storybook

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist-storybook /usr/share/nginx/html

EXPOSE 8080
