pipeline {
    agent any

    environment {
        NODE_VERSION = '20.x'
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

    post {
        always {
            archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}