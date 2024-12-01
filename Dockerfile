# Use the Node.js image as the base
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite app
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:stable-alpine AS production

# Set the working directory in the nginx container
WORKDIR /usr/share/nginx/html

# Copy the built files from the previous stage
COPY --from=build /app/dist .

# Expose the application on port 8080
EXPOSE 8080

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
