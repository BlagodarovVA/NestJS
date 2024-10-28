FROM node:20-alpine
WORKDIR /opt/nestApp
ADD package.json package.json
RUN npm install --legacy-peer-deps
ADD . .
RUN npm run build
RUN npm prune --production --legacy-peer-deps
CMD ["node", "./dist/main.js"]