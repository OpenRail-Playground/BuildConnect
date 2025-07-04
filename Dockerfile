FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN ng build --configuration=production

FROM nginx:latest AS production
COPY --from=build app/dist/build-connect/browser /usr/share/nginx/html
EXPOSE 80