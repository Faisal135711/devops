pipeline {
    agent any
    environment {
        PROJECT_NAME = 'MyProject'
        DEPLOY_ENV = 'production'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building ${env.PROJECT_NAME}..."
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying to ${env.DEPLOY_ENV} environment..."
            }
        }
    }
}
