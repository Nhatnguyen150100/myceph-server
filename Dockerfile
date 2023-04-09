FROM node:18.14.2-alpine
ENV NODE_ENV=production
ENV NODE_PATH="/usr/local/lib/node_modules:/myceph/backend/node_modules"
WORKDIR /myceph-server/backend
COPY "package*.json" ./
RUN npm install
RUN npm install -g @babel/cli @babel/core@7.20.12 @babel/preset-env@7.20.2
COPY . .
RUN npm run build
CMD ["npm", "run", "production"]
