pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
        stage('Test') {
            parallel {
                stage('Unit Tests') {
                  steps {
                    echo 'Running unit tests...'
                  }
                }
                stage('Integration Test') {
                  steps {
                    echo 'Running integration tests...'
                  }
                }
            }
            
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
        
        stage('Code Analysis') {
            steps {
                echo 'Performing code analysis...'
            }
        }
    }
}
