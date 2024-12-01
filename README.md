# Playwright Login Test with GitHub Secrets and POM

This project demonstrates how to use [Playwright](https://playwright.dev/) for UI automation testing while learning about **GitHub Actions Secrets**, **Playwright Fixtures**, and the **Page Object Model (POM)**. The test automates logging into a website and validates the presence of the Logout button to ensure the login was successful.

---

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Key Concepts](#key-concepts)
- [Setup Instructions](#setup-instructions)
- [Running the Tests](#running-the-tests)
- [GitHub Actions Integration](#github-actions-integration)
- [What I Learned](#what-i-learned)

---

## Overview
This project is a simple login automation test that:
- Uses **Playwright** for browser automation.
- Implements the **Page Object Model (POM)** design pattern to organize test logic.
- Demonstrates how to securely manage **secret variables** (e.g., login credentials) in **GitHub Actions**.
- Runs tests in a **CI pipeline** using GitHub Actions.

The goal of this project was to explore key concepts in test automation and CI/CD workflows.

---

## Technologies Used
- **Playwright**: For browser automation testing.
- **TypeScript/JavaScript**: For writing tests and page object classes.
- **GitHub Actions**: For running tests in a CI/CD pipeline.
- **Node.js**: Runtime for executing tests.
- **GitHub Secrets**: For securely managing sensitive variables (e.g., login credentials).

---

## Key Concepts
1. **GitHub Secrets**:
   - Protect sensitive information like usernames and passwords.
   - Access them as environment variables in GitHub Actions workflows.

2. **Fixtures**:
   - Share common setup code across tests using Playwright’s `test.extend()`.

3. **Page Object Model (POM)**:
   - Encapsulate page interactions in reusable classes to improve test readability and maintainability.

---

## Setup Instructions
### Prerequisites
1. [Node.js](https://nodejs.org/) installed (version 16+ recommended).
2. [Playwright](https://playwright.dev/) installed globally or via `npm`.
3. A GitHub repository with appropriate secrets configured.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
2. **Install Dependencies**:
   ```bash
   npm install
3. **Configure GitHub Secrets**:
   - Go to your repository → **Settings** → **Secrets and Variables** → **Actions**.
   - Add the following secrets:
     - `USER`: The username for logging into the test website.
     - `PASSWORD`: The password for logging into the test website.
4. **Run Locally**:
   - Set environment variables locally and execute the test:
     ```bash
     USER=your-username PASSWORD=your-password npx playwright test
     ```

---

## Running the Tests
### Locally
To run the tests locally:
1. Ensure all dependencies are installed.
2. Execute the Playwright test command:
   ```bash
   npx playwright test

### On GitHub Actions
1. Push your changes to the `main` or `master` branch.
2. GitHub Actions will automatically run the tests using the configured workflow.

---

## GitHub Actions Integration
The project includes a GitHub Actions workflow file `.github/workflows/playwright.yml`:
- Installs dependencies and Playwright browsers.
- Fetches secrets (`USER` and `PASSWORD`) securely from GitHub.
- Runs the Playwright test suite in headless mode.
- Uploads test artifacts (screenshots or logs) if a failure occurs.

### Workflow Example
```yaml
name: Playwright Tests

on:
  push:
    branches: [main, master]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: lts/*
      - name: Install dependencies
        run: npm ci
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      - name: Run Playwright Tests
        env:
          USER: ${{ secrets.USER }}
          PASSWORD: ${{ secrets.PASSWORD }}
        run: npx playwright test
```

---

## What I Learned

1. **GitHub Secrets**:
   - How to securely manage and use sensitive data in GitHub Actions workflows.
   - Access secrets as environment variables during CI runs.

2. **Playwright Fixtures**:
   - Using `test.extend()` to set up reusable page objects and test data.
   - Sharing common setup logic across multiple test cases.

3. **Page Object Model (POM)**:
   - Encapsulating page-specific logic into reusable classes.
   - Improving test readability, maintainability, and scalability.

4. **Debugging CI Issues**:
   - Identifying and handling environment-specific problems such as:
     - Network latency in CI environments.
     - Flaky tests due to timing inconsistencies.
   - Using retries, timeouts, and explicit waits to improve test stability.

5. **Continuous Integration (CI)**:
   - Setting up automated test pipelines in GitHub Actions.
   - Uploading test artifacts like screenshots and logs for debugging failures.

---

