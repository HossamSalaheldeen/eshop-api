pipeline {
    agent any

    stages {
        stage('Clone Repo'){
            steps {
                git branch: 'main', url: 'https://github.com/HossamSalaheldeen/eshop-api.git'
            }
        }

        stage('Prepare'){
            steps {
                bat "docker compose up"
            }
        }
    }
}