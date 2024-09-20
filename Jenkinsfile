pipeline {
  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        script {
          echo "sss"
          bat 'npm install'
        }
      }
    }

    stage('Build') {
      steps {
        script {
          bat 'npm run build'
        }
      }
    }
    stage('deploy') {
            steps {
              // bat "aws configure set region $AWS_DEFAULT_REGION" 
              bat "aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID"  
              bat "aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY"
              // bat "aws s3 cp ivica/index.html s3://ivica"
              bat 'aws s3 sync out/ s3://react-app-deployment-1'
            }
        }
  }
}
