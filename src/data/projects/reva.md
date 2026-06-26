---
title: Reva - Discord Timezone Bot
description: A lightweight Discord bot that instantly shows a member's local time for global communities, gaming groups, and remote teams.
timeline: 
key: reva
link: https://reva.shivam.run
coverImage: /images/projects/reva.webp
containerClassName: p-8 sm:p-12 bg-[#AF82F1]
---

Reva is a Discord bot focused on one small but useful job: making timezone coordination effortless. It lets you check your own local time or another member's local time without the usual back-and-forth in chat.

## What it does

- Shows a member's current local time instantly.
- Helps global communities, remote teams, and gaming groups coordinate faster.
- Keeps the setup lightweight with a one-time timezone command.

## Core commands

- `/set-timezone` to save or update your timezone.
- `/time` to see your own local time.
- `/time @user` to check another member's time.
- `/help` to list the available commands.

## Why it is useful

- Avoids the usual "what time is it for you?" loop.
- Handles daylight saving changes automatically.
- Keeps the interaction simple enough to use in busy servers.

## Notes

- When you check another member's time, Reva identifies whose time is being shown without pinging them.
- When you check your own time, the response is only visible to you.
- The service stores the Discord user ID and chosen timezone needed for the bot to work.
