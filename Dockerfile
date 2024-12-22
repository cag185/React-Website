# Use Node.js as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app's code
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight HTTP server like express or serve
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 80

# Serve the app
CMD ["serve", "-s", "build", "-l", "80"]
