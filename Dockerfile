# Step 1: Use the official Node.js 14 image as the base image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and yarn.lock files to the container's working directory
COPY package.json yarn.lock ./

# Step 4: Install dependencies
RUN yarn install

# Step 5: Copy the rest of your app's source code from your host to your image filesystem
COPY . .

# Step 6: Build the React application
RUN yarn build

# Step 7: Install serve to serve the build directory
RUN yarn global add serve

# Step 8: Define the command to run your app using serve
CMD ["serve", "-s", "build", "-l", "59089"]

# Step 9: Expose the port the app runs on
EXPOSE 59089
