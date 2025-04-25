pipeline {
    agent {
        docker {
            image 'node:23-alpine'
            reuseNode true
        }
    }

    environment {
        NETLIFY_SITE_ID = '8d4a0d03-d80b-4739-96e1-7d0618aa5bf8'
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')
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
                    echo "building..."
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
                    npm install netlify-cli
                    node_modules/.bin/netlify --version
                    echo "deploying to prod. site id: $NETLIFY_SITE_ID"
                    node_modules/.bin/netlify status
                    node_modules/.bin/netlify deploy --dir=build --prod
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
