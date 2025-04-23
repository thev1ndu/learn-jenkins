pipeline {
    agent any

    stages {
        stage('Build w/ Container') {
            agent {
                docker {
                    image 'node:23-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
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
    }
}   