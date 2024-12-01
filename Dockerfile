steps:
  # Step 1: Build the Docker image
  - name: 'gcr.io/cloud-builders/docker'
    args:
      - 'build'
      - '.'
      - '-t'
      - 'gcr.io/foskin-nendy/foskin-spa:$SHORT_SHA' # Change "react-project" to your project name
      - '-f'
      - 'Dockerfile'

  # Step 2: Push the Docker image to Container Registry
  - name: 'gcr.io/cloud-builders/docker'
    args:
      - 'push'
      - 'gcr.io/foskin-nendy/foskin-spa:$SHORT_SHA' # Change "react-project" to your project name

  # Step 3: Deploy the Docker image to Cloud Run
  - name: 'gcr.io/cloud-builders/gcloud'
    args:
      - 'run'
      - 'deploy'
      - 'foskin-spa' # Change "react-project" to your project name
      - '--region=asia-southeast2' # Customize the region as needed
      - '--platform=managed'
      - '--allow-unauthenticated'
      - '--image=gcr.io/foskin-nendy/foskin-spa:$SHORT_SHA' # Change "react-project" to your project name
      - '--port=8080'

options:
  logging: CLOUD_LOGGING_ONLY
