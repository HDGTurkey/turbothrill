# Node.js tabanlı bir görüntü kullanın
FROM node:latest

# Uygulama dizinini oluşturun
WORKDIR /usr/src/app

# .dockerignore dosyasını kopyala
COPY .dockerignore .dockerignore

# Bağımlılıkları yükleyin
COPY package*.json ./
RUN npm install -f

# Uygulama kodunu kopyalayın
COPY . .

# Next.js uygulamasını oluşturun
RUN npm run build

# Uygulamayı çalıştırın
CMD ["npm", "run", "start:prod"]
