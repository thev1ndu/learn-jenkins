pipeline {
    agent {
        docker {
            image 'node:23-alpine'
            reuseNode true
        }
    }

    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')
        NETLIFY_SITE_ID = credentials('netlify-site-id')
    }

    stages {
        stage('Build') {
            steps {
                sh '''
                    echo "Jenkins Pipeline | Building"
                    echo "file list (before build):"
                    ls -la
                    echo "node version: "
                    node --version
                    echo "npm version: "
                    npm --version
                    echo "npm install with ci (compatible with cont. integration)"
                    npm ci
                    echo "building... (prod. ready)"
                    npm run build
                    echo "build file"
                    ls -la | grep "build"
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    echo "Jenkins Pipeline | Testing"
                    test -f build/index.html
                    npm test
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Jenkins Pipeline | Deploying"
                    npm install netlify-cli -g
                    netlify init
                '''
            }
        }
    }

    post {
        always {
            junit 'test-results/junit.xml'
        }
    }
}   