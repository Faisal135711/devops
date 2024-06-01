pipeline {
    agent any

    environment {
        NODE_VERSION = 'version-20.x'
    }

    tools {
        nodejs "${NODE_VERSION}"
    }

    stages {
        stage("Install dependecies") {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}