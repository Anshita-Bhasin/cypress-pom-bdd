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
                 sh "TAGS=${params.Tag} npm run param-test-with-report"



            }
        }
        
    }

    post{
            always {
         publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    icon: '', 
                    keepAll: false, 
                    reportDir: 'cypress/reports/html/', 
                    reportFiles: 'index.html', 
                    reportName: 'Cypress HTML Report'
                ])
         publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    icon: '', 
                    keepAll: false, 
                    reportDir: 'cypress/reports/cucumber-htmlreport/', 
                    reportFiles: 'index.html', 
                    reportName: 'Cucumber HTML Report'
                ])

                    slackSend( channel: "jenkins", token: "ImfTzosTwVC7iGxlxlFNspme", color: "good", message: "Regression Test Report - http://localhost:8080/job/cypress-26july-pipelineproject/Cucumber_20HTML_20Report/")
    }



    }
}