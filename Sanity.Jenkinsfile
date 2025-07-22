pipeline {
    agent any

    stages {
        stage('Build - Install Dependencies') {
            steps {
                echo '******* Build Step - Cypress Build ********'
                sh 'npm i'

            } }
             stage('Test') {
            steps {
                echo '*******Test Step - Cypress Test *******'
                sh 'npm run test:regression:firefox-browser'
            } }
             stage('Deploy') {
            steps {
                echo '****** Test Deploy - Cypress Deploy ******** '
            }
        }
    }
}
