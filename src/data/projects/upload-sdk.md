---
title: Upload SDK
description: An open-source, TypeScript-first SDK for secure direct file uploads to S3, ImageKit, and Neon Object Storage.
timeline: Open source
key: upload-sdk
link: https://upload-sdk.dev
github: https://github.com/evensurface/upload-sdk
coverImage: https://github.com/evensurface.png
containerClassName: p-4 sm:p-6 bg-accent
---

Upload SDK is an open-source TypeScript library for preparing direct browser-to-storage uploads without building a separate upload pipeline for every provider.

It gives developers one way to define upload rules, validate file metadata, generate short-lived upload targets, and send files directly to storage. It currently supports **AWS S3, ImageKit, and Neon Object Storage**.

The library is published on npm as [`@evensurface/upload-sdk`](https://www.npmjs.com/package/@evensurface/upload-sdk), with documentation and examples at [upload-sdk.dev](https://upload-sdk.dev).

## Why I built it

File uploads tend to start with a simple form and turn into repetitive infrastructure work: validating inputs, keeping credentials private, generating signed upload requests, supporting different storage providers, and handling large files.

I built Upload SDK to make the preparation step reusable. An application defines its storage profiles and asset rules once, then uses the same API regardless of where the file will be stored.

## How it works

The browser sends a file's name, declared content type, and size to an application endpoint. After the application authenticates and authorizes the request, Upload SDK checks the metadata against its configured rules and generates a short-lived, provider-specific upload target.

The browser then uploads the file **directly to the storage provider**, rather than proxying its bytes through the application server. Provider secrets stay server-side.

## What it handles

- Type-safe storage profiles and reusable asset definitions
- Direct uploads to AWS S3, ImageKit, and Neon Object Storage
- File extension, declared MIME type, filename, and size validation
- Collision-resistant storage object keys
- Short-lived signed upload requests and provider-specific form fields
- Large-file multipart workflows for compatible S3 storage, including part signing, completion, and aborting failed uploads
- Consistent TypeScript types, error handling, and browser-upload helpers

## Designed around a clear security boundary

Upload SDK checks **client-reported metadata** before signing an upload. It does not inspect actual file bytes or automatically confirm an upload succeeded.

Applications remain responsible for authentication, authorization, verifying completed uploads, storing trusted file records, and performing content scanning or cleanup when required. The aim is to make secure upload preparation easier without hiding those responsibilities.

## Public project stats

As of **November 13, 2026**:

- **215 npm downloads** of `@evensurface/upload-sdk` in the latest available 30-day reporting period (**October 13–November 11, 2026**), according to the [npm downloads API](https://api.npmjs.org/downloads/point/last-month/@evensurface/upload-sdk).
- **8 GitHub stars** and **2 forks** on the [public repository](https://github.com/evensurface/upload-sdk).
- **3 supported storage providers** documented in the project.

These are point-in-time public metrics; npm downloads represent package download events, not unique users.

## Developer experience and open source

The project includes a documented configuration API, provider-specific guides, a Next.js demo, TypeScript definitions, and a publicly developed MIT-licensed codebase.

The [documentation](https://upload-sdk.dev) covers installation, storage profiles, validation rules, provider setup, direct-upload architecture, and multipart uploads. The full implementation is available on [GitHub](https://github.com/evensurface/upload-sdk).
