# HedgeAI CI/CD and Workflow Guide

## Table of Contents
1. [Linear Workflow](#linear-workflow)
2. [Git Operations](#git-operations)
3. [CI/CD Pipeline](#cicd-pipeline)
4. [Branch Management](#branch-management)
5. [Deployment Stages](#deployment-stages)

## Linear Workflow

### Issue States
- `Backlog` → `Todo` → `In Progress` → `In Review` → `Done`

### Creating Issues
1. Open Linear and select the appropriate team/project
2. Click "New Issue" or press `C`
3. Fill in:
   - Title (clear and concise)
   - Description (use templates when available)
   - Priority (High/Medium/Low)
   - Labels
   - Assignee
   - Cycle (sprint)

### Working on Issues
1. Move issue to "In Progress"
2. Create a branch directly from Linear
   - Click "Create Branch" in issue
   - Branch format: `feature/LINEAR-123-feature-description`
3. Update issue status as you progress
4. Link PRs to issues using Linear ID in commit messages

### Linear Shortcuts
```
C - Create issue
⌘/Ctrl + K - Command menu
B - Toggle sidebar
F - Search
E - Edit issue
⌘/Ctrl + Enter - Save changes
```

## Git Operations

### Basic Workflow
```bash
# Get latest changes
git checkout development
git pull origin development

# Create feature branch
git checkout -b feature/LINEAR-123-feature-name

# Make changes and commit
git add .
git commit -m "feat(LINEAR-123): implement feature x"

# Push to remote
git push -u origin feature/LINEAR-123-feature-name
```

### Branch Management
```bash
# List branches
git branch

# Delete local branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name

# Clean up deleted remote branches
git remote prune origin

# Update feature branch with development
git checkout feature/LINEAR-123-feature-name
git pull origin development
```

### Commit Message Format
```
type(scope): description

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructure
- test: Tests
- chore: Maintenance

Example:
feat(LINEAR-123): implement portfolio rebalancing
```

## CI/CD Pipeline

### Pipeline Stages
1. **Build**
   - Code compilation
   - Dependency installation
   - Static analysis

2. **Test**
   - Unit tests
   - Integration tests
   - E2E tests

3. **Security**
   - Dependency scanning
   - Code scanning
   - SAST (Static Application Security Testing)

4. **Deploy**
   - Development
   - Staging
   - Production

### GitHub Actions Workflow
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ development, beta, main ]
  pull_request:
    branches: [ development ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build

  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to environment
        run: |
          if [ "${{ github.ref }}" = "refs/heads/main" ]; then
            ./deploy.sh production
          elif [ "${{ github.ref }}" = "refs/heads/beta" ]; then
            ./deploy.sh staging
          else
            ./deploy.sh development
          fi
```

## Branch Management

### Branch Strategy
```
main (production)
  ↑
beta (staging)
  ↑
development
  ↑
feature branches
```

### Protected Branches
- `main`
  - Requires 2 approvals
  - Must be up to date
  - Must pass CI
  - No direct pushes

- `beta`
  - Requires 1 approval
  - Must pass CI
  - No direct pushes

- `development`
  - Requires 1 approval
  - Must pass CI

### Merge Process
1. Create PR from feature branch to `development`
2. Get code review and approval
3. Pass all CI checks
4. Merge using squash merge
5. Delete feature branch

## Deployment Stages

### Development
- Automatic deployment on merge to `development`
- Environment: dev.hedgeai.com
- Used for active development and testing

### Staging (Beta)
- Deployment on merge to `beta`
- Environment: beta.hedgeai.com
- Used for QA and pre-release testing

### Production
- Manual approval required
- Environment: hedgeai.com
- Zero-downtime deployment
- Automated rollback capability

### Deployment Commands
```bash
# Deploy to development
npm run deploy:dev

# Deploy to staging
npm run deploy:beta

# Deploy to production
npm run deploy:prod

# Rollback production
npm run rollback:prod
```

## Best Practices

### Code Review
- Review PR within 24 hours
- Check for:
  - Code quality
  - Test coverage
  - Documentation
  - Security issues
  - Performance impact

### Branch Cleanup
```bash
# List merged branches
git branch --merged

# Cleanup script
./scripts/cleanup-branches.sh

# Delete all merged feature branches
git branch --merged | grep -v "^\*" | grep "feature/" | xargs git branch -d
```

### Monitoring
- Monitor deployment status
- Check error rates
- Review performance metrics
- Monitor system health
- Set up alerts for issues

### Recovery
- Document rollback procedures
- Keep backup deployment ready
- Monitor system metrics
- Have incident response plan

## Tools and Integration

### Required Tools
- Linear (Project management)
- GitHub (Code repository)
- GitHub Actions (CI/CD)
- Docker (Containerization)
- AWS (Cloud infrastructure)

### Environment Setup
```bash
# Install required tools
npm install -g aws-cli
npm install -g firebase-tools

# Configure AWS
aws configure

# Login to registry
docker login ghcr.io
```

Remember to regularly:
- Update dependencies
- Clean up old branches
- Review security alerts
- Update documentation