pipeline {
    agent any
    
    tools {
        nodejs "Node"
    }

    parameters {
    choice(
        name: 'Scripts', 
        choices: ['smoketest-withreport', 'test-with-report'],
        description: 'Choose Script to run'
    )
    choice(
        name: 'Tag', 
        choices: ['@smoke', '@regression', '@login'], 
        description: 'Choose tag to run tests by'
    )
}
    
    stages {
        stage('Build - Install Dependencies') {
            steps {
                echo '******* Build Step - Cypress Build ********'
                sh 'npm i'
            }
        }
        
        stage('Test') {
            steps {
                echo '*******Test Step - Cypress Test *******'
                // sh 'npm run ${params.Scripts}'
                //  sh "npx cypress run --env TAGS=${params.Tag}"
                //  sh "npm run test-with-report"
                 sh "TAGS=${params.Tag} npm run test-with-report"



            }
        }
        
        stage('Publish Report') {
            steps {
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    icon: '', 
                    keepAll: false, 
                    reportDir: 'cypress/reports/html/', 
                    reportFiles: 'index.html', 
                    reportName: 'Cypress HTML Report'
                ])
            }
        }

        stage('Cucumber HTML Report') {
            steps {
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    icon: '', 
                    keepAll: false, 
                    reportDir: 'cypress/reports/cucumber-htmlreporter/', 
                    reportFiles: 'index.html', 
                    reportName: 'Cucumber HTML Report'
                ])
            }
        }
    }
}