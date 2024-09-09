# XYZ Project

## Development Stratergy

## Project Introduction

Welcome to the **XYZ UPI** project!

This README provides an overview of the project, its purpose, development guidelines, and more. Whether you're a developer contributing to the project or someone interested in understanding its functionalities, you'll find relevant information here.

Feel free to explore the different sections of this README to get a comprehensive understanding of the project's goals, technologies used, and how to contribute.

## A. Steps to Create React App:

1. Update the app version in the following files:
   - `package.json`: `"version": "<version>"`
   - `YourComponent.js`: respective line number: `version: "<version>"`
   - `App.js`: respective line number: `version: "<version>"`

2. Run the respective branch pipeline.

3. For development, use the following commands:
   - `npm install`
   - `npm start`

## B. Branch and Pipeline Management:

1. **dev branch**:
   - Branch Name: `dev`
   - Pipeline Name: `<PIPELINE NAME>`
   - Constraints:
     - This will be the default branch.
     - At least one reviewer required to merge PR on this branch.
     - CI/CD `<PIPELINE NAME>` will build and deploy the app from this branch.

2. **qa branch**:
   - Branch Name: `qa`
   - Pipeline Name: `<PIPELINE NAME>`
   - Constraints:
     - All QA releases will be made from this branch.
     - At least one reviewer required to merge PR on this branch.
     - CI/CD `<PIPELINE NAME>` will build and deploy the app from this branch.

3. **uat branch**:
   - Branch Name: `uat`
   - Pipeline Name: `<PIPELINE NAME>`
   - Constraints:
     - All releases will be provided from this branch.
     - At least one reviewer required to merge PR on this branch.
     - CI/CD `<PIPELINE NAME>` will build and deploy the app from this branch.

4. **developer branch**:
   - Branch Name: `dev_<devname>`
   - Constraints:
     - Every developer should have this branch.
     - This branch should be created from the `dev` branch.

5. **feature branch**:
   - Branch Name: `feature_<featurename>`
   - Constraints:
     - Every feature branch should be created from the `dev` branch.
     - At least one reviewer required to merge PR on this branch by raising a PR.
     - Feature branch will always merge into `dev` branch. (e.g., `feature_icici`, `feature_idfc`)

6. **third-party branch**:
   - Branch Name: `third-party_integration`
   - Constraints:
     - This branch will be the source of truth for integrating third-party libraries.
     - No PR should be raised against this branch.

## C. Bug Fix Branch:

7. **developer bug fix branch**:
   - Branch Name: `dev_<devname>_jira_<ticketnumber>`
   - Constraints:
     - If a developer is working on a bug fix, the developer should create a new branch from the `dev` branch.
     - When the bug is resolved, the `dev_<devname>` branch should be merged into the `dev` branch by raising a PR.
     - At least one reviewer required.

## D. Feature Development:

8. **developer feature integration branch**:
   - Branch Name: `feature_<featurename>_<devname>`
   - Constraints:
     - If a developer is working on feature contribution, the developer should create a new branch from the `feature_<featurename>` branch.
     - When the feature is implemented, the `feature_<featurename>_<devname>` branch should be merged into the `feature_<featurename>` branch by raising a PR.
     - At least one reviewer required.

## E. Hotfix Branch:

9. **hotfix branch**:
   - Branch Name: `hotfix_<hotfixname>`
   - Constraints:
     - Hotfix branches are created to address critical issues in production.
     - A hotfix branch should be created from the `uat` branch.
     - After fixing the issue, the hotfix branch should be merged into both `uat` and `dev` branches.
     - At least one reviewer required.

## F. Release Branch:

10. **release branch**:
    - Branch Name: `release_<version>`
    - Constraints:
      - Release branches are created for planned releases.
      - A release branch should be created from the `dev` branch.
      - After finalizing the release, the release branch should be merged into both `uat` and `qa` branches.
      - At least one reviewer required.     

## G. Rules to Follow Throughout Development:

1. Every commit should have the Jira Ticket Number at the prefix of the commit message.
2. Every commit should have a one-liner detailed message indicating the purpose of the commit (bug fix, feature integration, version change).
3. Every commit should have the developer's name in the commit message.
4. Avoid using gibberish or random keywords in commit messages; messages should always provide crisp details of the commit.
5. Avoid making local merge.

## H. Commit Message: 

**Syntax:**
/"<Jira. Ticket_Number>: <Purpose>, <Message>/".
/"Developer: <Dev_Name>/"

**Example:**
"Jira-1007: Bug Fix, Fixes in Your Component."
"Developer: John"

## I. Helper Resources:

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Jenkins CI/CD](<Jenkins CI/CD link>)
- [Third-Party Library Documentation](https://example.com/library-docs)

## J. Point of Contact:
1. John
2. Doe
