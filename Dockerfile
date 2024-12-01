# Use the official Node.js 20 Alpine image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the application port (change this if your app uses a different port)
EXPOSE 8080

# Command to run the application
CMD ["node", "server.js"]  # Change 'server.js' to your main application file
