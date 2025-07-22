pipeline {
    agent any
        tools {nodejs "Node"}
    stages {
        stage('Build - Install Dependencies') {
            steps {
                echo '******* Build Step - Cypress Build ********'
                sh 'npm i'

            } }
             stage('Test') {
            steps {
                echo '*******Test Step - Cypress Test *******'
                sh 'npm run test:smoke-critical'
            } }
             stage('Deploy') {
            steps {
                echo '****** Test Deploy - Cypress Deploy ******** '
            }
        }
    }
}
