# React App with Jenkins CI/CD Pipeline

[![Netlify Status](https://api.netlify.com/api/v1/badges/8d4a0d03-d80b-4739-96e1-7d0618aa5bf8/deploy-status)](https://app.netlify.com/sites/gleaming-queijadas-2f13a0/deploys)

A modern React application with automated CI/CD pipeline using Jenkins and deployment to Netlify.

## 🚀 Live Demo

Visit the live application: [https://gleaming-queijadas-2f13a0.netlify.app/](https://gleaming-queijadas-2f13a0.netlify.app/)

## 📋 Project Overview

This project demonstrates a complete CI/CD workflow for a React application using:

- **React** - Frontend framework
- **Jenkins** - CI/CD automation
- **Docker** - Containerized build environment
- **Netlify** - Hosting and deployment

## 🔧 CI/CD Pipeline Architecture

The Jenkins pipeline automates the build, test, and deployment workflow using a declarative pipeline approach.

### Pipeline Stages:

#### 1. Build
- Uses Node.js 23 Alpine Docker image
- Installs dependencies with `npm ci` (optimized for CI environments)
- Builds production-ready application with `npm run build`

#### 2. Test
- Validates build output
- Runs application tests
- Generates JUnit test reports

#### 3. Deploy
- Installs Netlify CLI
- Authenticates with Netlify using secure credentials
- Deploys build directory to production environment

## 🛠️ Setup Instructions

### Prerequisites
- Git
- Jenkins with Docker support
- Netlify account and site setup

### Jenkins Configuration

1. **Create a Jenkins Pipeline Job**
   - Create a new Pipeline job in Jenkins
   - Configure SCM to point to this repository

2. **Configure Required Credentials**
   - Add `netlify-token` credential in Jenkins Credentials Manager
   - Ensure Docker is available to Jenkins

3. **Environment Variables**
   - `NETLIFY_SITE_ID`: Your Netlify site ID (already configured in Jenkinsfile)
   - `NETLIFY_AUTH_TOKEN`: Netlify authentication token (referenced via credentials)
