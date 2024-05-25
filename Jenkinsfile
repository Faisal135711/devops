pipeline {
  agent any

  stages {
    stage("build") {
      steps {
        echo "building the application!!!"
        nodejs('Node-22.2.0') {
          sh 'npm install'
          sh 'npm start'
        }
      }
    }

    stage("test") {
      steps {
        echo "testing the application..."
      }
    }

    stage("deploy") {
      steps {
        echo "deploying the application..."
      }
    }
  }
}
