---
title: Updating the template
description: How to keep your version of Nordlys up-to-date with the latest changes
publishedDate: 2025-03-07
tags:
  - documentation
---

When you fork this template to create your own blog, you are free to make any adjustments and modifications you like, independent of the original project. To ensure you don't miss out on new features and fixes that Nordlys receives, simply update your base template periodically. This post will walk you through the process.

## Check for a newer version

Checking for a newer version and updating to it is simple.

1. Check the Nordlys version you are using by opening the `package.json` and noting the version listed there.

```json package.json
{
  "name": "nordlys",
  "version": "2.1.3"
  //...
}
```

2. Go to the [GitHub releases](https://github.com/FjellOverflow/nordlys/releases) and check for the latest version. There, as well as in the [Changelog](https://github.com/FjellOverflow/nordlys/blob/main/CHANGELOG.md), you can see a list of all changes made.

If you decide to update, you can do so either with a `git merge` or manually. Both options are explained below.

## Semi-automated update with `git`

If you are versed with git, this is the quicker method (and my preferred method). However, if you are new to git, the manual update might be a better option.

1. Add the Nordlys repository as `upstream`. You only need to do this the first time you update.

```bash
git remote add upstream https://github.com/FjellOverflow/nordlys.git
```

2. Fetch the latest change from `upstream`

```bash
git fetch upstream
```

3. Merge the new changes

```bash
git merge --squash --allow-unrelated-histories upstream/main
```

4. Most likely, merge conflicts will arise. Resolve them using your preferred method (e.g., VS Code), then add and commit the resolved files. Be wary of files that you had deleted previously being recreated.

```bash
git commit -m "Update to latest Nordlys version"
```

## Manual updating

Depending on how much you have modified the template, this method can be quicker or more tedious.

1. Identify the files and directories you have modified. These will most likely include:

- `src/theme.config.ts`
- the `content` directory

and perhaps others.

2. Clone or download a fresh version of the template

3. From the fresh template, copy the new versions of the files one by one into your old project, while keeping or adjusting all files you modified yourself.

## After updating

After updating, especially if the `package.json` or `pnpm-lock.yaml` files have been modified, you should run `pnpm install` to get the newer versions of the dependencies.

You can also take matters into your own hands and update these dependencies yourself, for example, using [taze](https://github.com/antfu-collective/taze).

Make sure to run `pnpm dev` and inspect the new version of the website. It might be helpful to compare it with a deployed version on the web to ensure that nothing has broken due to the update.

Lastly, if you notice any new (or old) bugs, make sure to [report them](https://github.com/FjellOverflow/nordlys/issues)!
