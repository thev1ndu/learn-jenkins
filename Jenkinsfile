pipeline {
    agent {
        docker {
            image 'node:23-alpine'
            reuseNode true
        }
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
    }
}   