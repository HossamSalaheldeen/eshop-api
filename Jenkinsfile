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
                bat 'echo APP_PORT=8000\nDB_URL=mongodb://eshop_db:27017\nDB_DATABASE=eshop\nJWT_SECRET_KEY=UjWnZr4u7x!A%D*G-KaPdSgVkYp2s5v8\nJWT_EXPIRATION_TIME=24h\nNODE_ENV=development > .env'
            }
        }

        stage('Docker up'){
            steps {
                withEnv(['APP_PORT=8000', 'DB_URL=mongodb://eshop_db:27017','DB_DATABASE=eshop','JWT_SECRET_KEY=UjWnZr4u7x!A%D*G-KaPdSgVkYp2s5v8','JWT_EXPIRATION_TIME=24h','NODE_ENV=development']) {
                    bat "docker compose up -d"
                    bat 'docker compose ps'
                }
            }
        }
    }

    post {
        failure {
            bat 'docker compose down --remove-orphans -v'
            bat 'docker compose ps'
        }

        aborted {
            bat 'docker compose down --remove-orphans -v'
            bat 'docker compose ps'
        }
    }
}