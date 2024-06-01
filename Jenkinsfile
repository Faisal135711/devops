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
                    echo 'Running unit tests...'
                }
                stage('Integration Test') {
                    echo 'Running integration tests...'
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
