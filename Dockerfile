FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV GENERATE_SOURCEMAP false
EXPOSE 3000
CMD [ "npm", "run", "dev" ]