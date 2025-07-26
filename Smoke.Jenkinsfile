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
                sh 'npm run smoketest-withreport'
            } }
             stage('Publish Report') {
                steps {
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    icon: '', 
                    keepAll: false, 
                    reportDir: 'cypress/reports/html/', 
                    reportFiles: 'index.html', 
                    reportName: 'Cypress HTML Report', 
                    reportTitles: '', 
                    useWrapperFileDirectly: true])
            }
        }
    }
}
