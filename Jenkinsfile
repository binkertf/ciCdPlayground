pipeline {
    agent any

    tools {
        nodejs 'yarn'
    }

    stages {
            stage('checkout and install') {
                steps {
                    git 'https://github.com/binkertf/ciCdPlayground/'

                    sh 'yarn'
                    sh 'yarn build'
                }
            }

        stage('unit test') {
            steps {
                sh 'yarn test'
                }
            }
        stage('integration test') {
            steps {
                sh 'yarn test:e2e'
            }
            post {
                success {
                    junit '**/reports/**/*.xml'
                }
            }
        }
    }
}
