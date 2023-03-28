# Use an official Node.js runtime as the base image
FROM node:latest

# Copy the React project files
COPY . .

# Install the dependencies
RUN npm install

# Build the Vue project
RUN npm run build

# Use Nginx as the web server
FROM nginx

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY /home/ubuntu/react/default.conf /etc/nginx/conf.d

# Copy the build files to the Nginx web root directory
COPY --from=0 /build /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]