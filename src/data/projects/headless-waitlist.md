---
title: Headless Waitlist
description: A modern, production-ready headless waitlist system built with Next.js, TypeScript, and PostgreSQL for collecting early user interest.
timeline: Open source
key: headless-waitlist
link: https://github.com/shivamrun/headless-waitlist
coverImage: /images/avatar.webp
containerClassName: p-4 sm:p-6 bg-orange-300
---

Headless Waitlist is an open-source waitlist system built for indie hackers and startups that want a clean way to collect early signups before launch. It is designed to be production-ready rather than just a demo form.

## What it does

- Collects email addresses for a product waitlist.
- Validates submissions and protects the endpoint with rate limiting.
- Stores signups in PostgreSQL with Drizzle ORM.
- Sends confirmation emails and can optionally use double opt-in verification.

## Stack and architecture

- Built with Next.js 15 and TypeScript.
- Uses PostgreSQL for persistent storage.
- Includes Resend for automated emails.
- Uses Arcjet for bot protection, email validation, and rate limiting.

## Why it is useful

- Gives startups a reusable waitlist backend instead of rebuilding the same flow each time.
- Ships with the security and reliability pieces that are usually skipped in quick prototypes.
- Can be integrated into a larger Next.js product or run as a standalone waitlist service.
