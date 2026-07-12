---
title: Better Auth Referral
description: An open-source Better Auth plugin for adding user-to-user referrals to any application.
timeline: Open source
key: better-auth-referral
link: https://github.com/marinedotsh/better-auth-referral
github: https://github.com/marinedotsh/better-auth-referral
coverImage: http://github.com/better-auth.png
containerClassName: p-4 sm:p-6 bg-accent
---

Better Auth Referral is an open-source plugin that helps developers add user-to-user referrals to applications built with Better Auth.

It handles referral-code generation, signup attribution, referral relationships, dashboard statistics, and referred-user lists without requiring developers to build the underlying referral infrastructure themselves.

The package is available on npm as [`@marinedotsh/better-auth-referral`](https://www.npmjs.com/package/@marinedotsh/better-auth-referral) and is listed in the Better Auth [Community Plugins](https://better-auth.com/docs/plugins/community-plugins) directory.

## Why I built it

Referral systems look simple from the outside, but they quickly require several connected pieces: generating unique codes, carrying them through signup, validating them safely, recording attribution, and exposing the results back to users.

Most applications end up rebuilding this flow from scratch.

I built Better Auth Referral to make that functionality reusable for products already using Better Auth. Developers can install the plugin, add it to their existing authentication setup, and build their own referral experience on top of it.

## What it handles

- Unique referral codes for every user
- Referral attribution during email signup
- Relationships between referrers and referred users
- Referral statistics for user dashboards
- Paginated referred-user lists
- Optional email masking for better privacy
- Custom callbacks for rewards, credits, and notifications

When no referral code is provided, the application's normal signup flow continues unchanged.

## Designed to stay flexible

The plugin focuses on referral infrastructure rather than enforcing a specific reward system.

Applications can use the included callback to build their own logic for granting credits, unlocking features, sending notifications, recording analytics events, or running other product-specific workflows.

This keeps the plugin small while allowing it to support different referral models.

## Developer experience

Better Auth Referral includes both server and client plugins, typed endpoints, configuration options, and exported TypeScript types.

It integrates directly with Better Auth's existing user, session, plugin, and database workflows, so developers do not need to maintain a separate referral service.

## Open source

The project is licensed under MIT and developed publicly under the Marine organization.

The complete installation guide, configuration reference, API documentation, database models, and usage examples are available in the [GitHub repository](https://github.com/marinedotsh/better-auth-referral).
