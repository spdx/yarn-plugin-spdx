<!--
SPDX-FileCopyrightText: 2023 SPDX contributors

SPDX-License-Identifier: CC0-1.0
-->

# Contributing Guidelines
Thank you for your interest in @yarnpkg/plugin-spdx.

## Issues
There is a [list of issues](https://github.com/spdx/yarn-plugin-spdx/issues) for @yarnpkg/plugin-spdx.
We use labels to identify bugs and issues that are good for beginners or particularly small.
For bugs, improvements or suggestions, feel free to [create a new issue](https://github.com/spdx/yarn-plugin-spdx/issues/new).
Please keep the issues small and concise. Issues that aim at solving multiple things at once tend to create lots of problems.
For open questions or other discussions, please contact the SPDX working group technical team through its mailing list, [spdx-tech@lists.spdx.org](mailto:spdx-tech@lists.spdx.org).

If you want to work on an issue, please assign the ticket to yourself or leave a comment on the issue.

## Development
For contributing to yarn-plugin-spdx, please follow the [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow):
1. Select an issue to work on or create a new issue. Assign the issue to yourself. Consider reviewing open pull requests to avoid duplicate work.
2. Fork the repository, as described [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository). Clone the fork to your local machine and make sure to keep the fork in sync with the upstream repository.
3. Install all dependencies and create a new branch for your work:
```shell
yarn install
git checkout -b your-new-feature
```
4. Make your changes.
5. Commit the changes to your branch:
```shell
git commit --signoff -m "Add new feature"
```
Please sign off every commit in order to acknowledge that you agree to the [Developer Certificate of Origin](DCO.md).
6. Push the changes to your fork:
```shell
git push origin your-new-feature
```
7. Create a pull request from your fork to the upstream repository. Make sure that all CI workflows are green. Please reference the fixed issue in the pull request.

## Building
We use [@yarnpkg/builder] (https://github.com/yarnpkg/berry/blob/master/packages/yarnpkg-builder/README.md) for building the library.
To build the library, navigate to the library root and run:
```shell
yarn build
```
