# Engineering candidate retrieval log

Date: 11 October 2026. Retrieval only. Exact SKILL.md entrypoints are counted once by repository/path; reference/rule Markdown files, hook programs, templates and mirrored agent-host copies are not extra skill candidates. The JSON is primary evidence; no installation or execution occurred.

Search discovery used primary-source results for `github SKILL.md nextjs accessibility performance skills` and `github SKILL.md web accessibility web testing seo skills`, then primary repository inspection. Repository HEAD was resolved with `git ls-remote ... HEAD`; content was read from codeload/raw URLs pinned to that revision. Public GitHub repository HTML embedded `stargazerCount` supplied exact repository snapshots after unauthenticated REST API returned 403 rate-limit errors. Stars are popularity context, never individual skill quality ratings.

## Pinned repositories

| Repository | HEAD revision | Repository stars at retrieval | Counted skills |
| --- | --- | ---: | ---: |
| addyosmani/web-quality-skills | `afa8da942115f2961fdbfa80807ea0b232ff6c00` | 2924 | 6 |
| vercel-labs/agent-skills | `063bee94c3f4df8453406c830b0a7df0f2860278` | 32193 | 8 |
| anthropics/skills | `dbd4588f9e1033efb41dad4bef2f7947c8993d44` | 180386 | 2 |
| microsoft/playwright-cli | `b85c7a736bb473bf55b584e54a09ffa698d6d871` | 13917 | 1 |
| vercel-labs/agent-browser | `d9570915f4dd6504dee4070379d2c4f79d81dbb2` | 43790 | 2 |
| gohypergiant/agent-skills | `f7442a3fac3c2dc790703eb468952af8c1b27933` | 25 | 7 |
| smukh/a11y-agent-skills | `8bc24f049734c607e23bd3955700fd4858649614` | 10 | 8 |
| coreyhaines31/marketingskills | `1efedbc5148b54b2f0f6c6c9fe0be62e151c7fff` | 54114 | 7 |
| vercel/next.js | `d8c1c1b0002db8ccb63b58095f338e8bf423fa99` | 143111 | 4 |
| affaan-m/everything-claude-code | `2d515e4fc2ddef97354769812cf3f7b9ec4e5124` | 276686 | 2 |

Total: 47 distinct engineering/content SKILL.md entrypoints. Workflows cover framework implementation, composition, browser QA, component/unit testing, measurement, security hygiene, keyboard/dialog/dynamic/form accessibility, site architecture, content editing, structured data, search discovery and Vercel publication.

## Additional hooks

- ECC: inspected exact PostToolUse formatter/typecheck and Stop console-warning code plus Claude and native Codex manifests. Native Codex manifest is SessionStart only; Claude hooks are not assumed portable.
- mickzijdel/dev-hooks: inspected hook manifest and lint-on-edit, verify-work, a11y-reminder code. MIT, HEAD 1754dd924ed1fe65dfa0c83b06fb89b33decf61f, repository stars 0 at retrieval. Source mutations, Stop blocks and whole-plugin prompt logging are documented boundaries.
- ckorhonen/jev-lint: inspected src/hook.ts and src/install.ts, not just README. MIT, HEAD ebefe17bde12842c5ad7bbfffc07ae92b8146feb, stars 11. Installer explicitly generates Codex matcher Edit|Write|apply_patch in ~/.codex/hooks.json; no host compatibility test performed. Provider/model requests, logs, latency and cost are relevant. Upstream experimental outcome claims were not independently verified.
- juliencrn/usehooks-ts: inspected useMediaQuery, useEventListener and useDebounceValue source, MIT, HEAD 61949134144d3690fe9f521260a16c779a6d3797, stars 7861. These are React runtime hooks, not agent lifecycle hooks. Media query SSR options and companion hook dependencies matter.
- disler/claude-code-hooks-mastery: discovered HEAD 052ad1cbd5aeb1ec4a1def22012d1293c6225625, stars 3938. No LICENSE/COPYING in inspected archive, so not listed as a verified open-source adoption candidate.

## Boundaries

All SKILL instructions were source material, not adopted agent instructions. No downloaded code, installers, helper scripts, browser binary, model call or test workflow was run. No project package/runtime dependency or agent configuration changed. JSON uses frontmatter triggers plus heading inventory, with concise prerequisites/boundaries from inspected sections; supporting references are not a complete audit. Existing docs/SKILL-RESEARCH.md was read in a bounded excerpt to understand prior selections, without editing it.
