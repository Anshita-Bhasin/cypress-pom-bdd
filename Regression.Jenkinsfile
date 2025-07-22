pipeline {
    agent any
        tools {nodejs "Node"}
    stages {
        stage('Build - Install Dependencies') {
            steps {
                echo '******* Build Step - Cypress Build ********'
                sh 'npm i'

            } }
             stage('Parallel Cypress Test') {
                parallel{
                    stage(' Run Firefox Test'){
                        steps{
                             echo '******* Firefox Step - Cypress Test *******'
                                sh 'npm run test:regression:firefox-browser'
                        }
                    }
                    stage(' Run Chrome Test'){
                        steps{
                             echo '******* Chrome Step - Cypress Test *******'
                                sh 'npm run test:smoke-critical:chrome-browser'
                        }
                    }
                }
             }
             stage('Deploy') {
            steps {
                echo '****** Test Deploy - Cypress Deploy ******** '
            }
        }
    }
}
