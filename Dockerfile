FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /myceph/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
RUN npm install -g @babel/core @babel/cli @babel/plugin-transform-runtime
COPY . .
EXPOSE 3000
RUN chown -R node /myceph/src/app
RUN npm run production
USER node
CMD ["npm", "run", "production","build","build-babel","clean"]
