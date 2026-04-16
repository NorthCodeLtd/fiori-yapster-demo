# Fiori Yapster Demo

Freestyle SAPUI5 / Fiori demo application with a mock OData backend and OPA integration tests.

## Purpose

This repository is the SAP/Fiori demo target for AI Colleague story mode:
- read a GitHub user story
- refine it in conversation
- generate mocks from a real running Fiori app
- implement the approved story in the app
- validate with OPA tests

The initial UI is intentionally read-only.
The backend contract already supports `POST` on `Posts`, but the compose UI is not exposed yet so it can be introduced later via a user story.

## Stack

- OpenUI5 1.147
- Freestyle SAPUI5 application
- Fiori 3 theme
- Mock OData service via `sap-fe-mockserver`
- OPA integration tests via Karma

## Run locally

```bash
npm install
npm start
```

Open:
- http://localhost:8081/index.html

## Run tests

```bash
npm test
```

## OData mock service

Service root:
- `/odata/v4/yapster/`

Example collection:
- `/odata/v4/yapster/Posts`

Mock metadata and data live in:
- `webapp/localService/metadata.xml`
- `webapp/localService/data/Posts.json`

## Current UX scope

- Fiori-styled read-only feed
- category filtering
- mock OData-driven content
- OPA coverage for startup and filtering

## Planned story example

A good first sample GitHub issue for AI Colleague story mode is:
- add a composer area with message input and post button
- submit to the existing OData `Posts` endpoint
- update OPA tests accordingly
