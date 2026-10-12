# Existing hooks and portfolio applicability

Hooks are executable integrations, while skills are instructions and React hooks are runtime functions. They are researched separately and excluded from the skill count. This preparation task enables none of them. Source inspection establishes declared behavior, not runtime compatibility on this host.

## Agent lifecycle hooks

| Inspected hook / pinned source | Observed purpose | Judgement for later development |
| --- | --- | --- |
| [ECC post-edit-format](https://github.com/affaan-m/everything-claude-code/blob/2d515e4fc2ddef97354769812cf3f7b9ec4e5124/scripts/hooks/post-edit-format.js) | Formats edited JS/TS via detected project formatter; Biome check --write; 15s timeout. | Mutates source; fails silently/non-blocking if formatter missing/fails. Native Codex manifest only SessionStart, so PostToolUse portability unverified. |
| [ECC post-edit-typecheck](https://github.com/affaan-m/everything-claude-code/blob/2d515e4fc2ddef97354769812cf3f7b9ec4e5124/scripts/hooks/post-edit-typecheck.js) | Runs tsc --noEmit --pretty false; reports edited-file errors; 30s timeout. | Can be expensive per edit; filters away errors in other files and exits 0, so not a full CI gate. Native Codex equivalent unverified. |
| [ECC check-console-log](https://github.com/affaan-m/everything-claude-code/blob/2d515e4fc2ddef97354769812cf3f7b9ec4e5124/scripts/hooks/check-console-log.js) | Warns on console.log in modified JS/TS; excludes tests/config/scripts. | Warning heuristic rather than correctness/quality proof; some logs are intentional. Native Codex equivalent unverified. |
| [ECC native Codex session bootstrap](https://github.com/affaan-m/everything-claude-code/blob/2d515e4fc2ddef97354769812cf3f7b9ec4e5124/hooks/codex-hooks.json) | Explicit native Codex manifest invokes bootstrap and session-start context. | Loads prior session summaries/learned context; this manifest is not evidence that Claude PostToolUse/Stop hooks work in Codex. |
| [dev-hooks lint-on-edit](https://github.com/mickzijdel/dev-hooks/blob/1754dd924ed1fe65dfa0c83b06fb89b33decf61f/plugins/dev-hooks/hooks/scripts/lint-on-edit.sh) | Formats/autofixes changed files with project tools; JS Prettier/ESLint/Biome branches; always exits0. | Source mutation and ignored errors; broad plugin contains prompt-log hook, so installing whole plugin has extra privacy/tooling implications. Codex portability not established. |
| [dev-hooks verify-work](https://github.com/mickzijdel/dev-hooks/blob/1754dd924ed1fe65dfa0c83b06fb89b33decf61f/plugins/dev-hooks/hooks/scripts/verify-work.sh) | Checks changed code using real linters/tests; full suite default; changed/off modes; blocks failures up to3 consecutive times. | Potential repeated long tests and stop loops; recognized tool availability controls coverage; whole plugin includes additional behavior. |
| [dev-hooks accessibility reminder](https://github.com/mickzijdel/dev-hooks/blob/1754dd924ed1fe65dfa0c83b06fb89b33decf61f/plugins/dev-hooks/hooks/scripts/a11y-reminder.sh) | Regex on newly added markup for missing alt/names/labels/noninteractive click handlers; once/session advisory. | Over/under-fires; not axe/browser/manual evidence; never blocks writes. |
| [jev-lint semantic hook](https://github.com/ckorhonen/jev-lint/blob/ebefe17bde12842c5ad7bbfffc07ae92b8146feb/src/hook.ts) | Reads event, runs semantic rule judgments, emits additionalContext; failures silent exit0; default8s timeout; installer has idempotent merge. | Code may be sent to configured model; latency/cost/false findings and logs; upstream efficacy numbers are self-reported, not independently verified; actual host support not tested. |
| [Impeccable design hook](https://github.com/pbakaus/impeccable/blob/d631a8827f99414d2b6daba4ef08b7f8701751d7/skill/reference/hooks.md) | Static supported-file/HTML heuristics after edits and at completion; no automatic fixes | Provider-specific native hooks and executable launcher; full completion findings may continue an agent turn. Not a Japanese visual-authenticity detector. |

## The closest existing aesthetic hook

[Impeccable](https://github.com/pbakaus/impeccable/blob/d631a8827f99414d2b6daba4ef08b7f8701751d7/.agents/skills/impeccable/SKILL.md) is the most directly design-related hook inspected. The repository snapshot has 79,540 stars; that is not an independent rating of the hook. Its source distinguishes a per-edit mechanical pass from a completion pass that also includes copy/palette/type/layout heuristics. It can match Edit/Write/apply_patch, deduplicate findings and guard recursion. The inspected path uses regex/static HTML analysis rather than screenshots. It cannot establish whether a composition connects the supplied newspaper and synth images.

Its current native launcher can download a pinned engine on first use, requiring network/cache access and checksum verification. The checked-in Codex template and installed project path differ: the installer rewrites the skill path. Codex and Claude completion hooks have different response semantics; Codex completion findings can return a blocking continuation decision. These details matter if it is later enabled. No launcher was executed here.

Our judgement: keep Impeccable as a targeted option during implementation if its actual checks and installation behavior are wanted. Use the reference-led skills and rendered review for art direction. For deterministic type/lint/build checks, prefer a small bounded command tied to the real project scripts; installing a broad hook suite before those scripts exist provides little evidence and introduces extra behavior.

No verified existing hook dedicated to this particular Japanese retro newspaper/equipment combination was found in this bounded search. This does not establish that none exists. Named Japanese aesthetic skills are documented separately; a genre label should not become a lint rule forcing stamps, vertical copy or filters.

## React runtime hooks

| Source | Possible use | Limit |
| --- | --- | --- |
| [usehooks-ts useMediaQuery](https://github.com/juliencrn/usehooks-ts/blob/61949134144d3690fe9f521260a16c779a6d3797/packages/usehooks-ts/src/useMediaQuery/useMediaQuery.ts) | Tracks arbitrary query; can consume prefers-reduced-motion; SSR defaultValue/initializeWithValue options; listener cleanup. | Next SSR hydration requires intentional initial value; package adoption and companion code needed; not agent automation. |
| [usehooks-ts useEventListener](https://github.com/juliencrn/usehooks-ts/blob/61949134144d3690fe9f521260a16c779a6d3797/packages/usehooks-ts/src/useEventListener/useEventListener.ts) | Typed window/document/element/media-query event subscriptions with cleanup. | Adding global listeners still requires bounded behavior and correct element refs; not an agent lifecycle hook. |
| [usehooks-ts useDebounceValue](https://github.com/juliencrn/usehooks-ts/blob/61949134144d3690fe9f521260a16c779a6d3797/packages/usehooks-ts/src/useDebounceValue/useDebounceValue.ts) | Returns debounced value and updater with equalityFn/default option handling. | Debounce changes interaction timing; not required for static content; companion hook dependencies must be reviewed. |

Prefer CSS media queries for simple hover/reduced-motion styling. Consider a React media-query hook only for behavior that needs runtime state, with deliberate server rendering/hydration defaults. Event listeners and debounce belong to concrete interaction needs; a static journal does not require them by default.

## Evidence and adoption boundary

There are **nine lifecycle hook candidates and three React runtime hooks** across the engineering/design tracks. Some lifecycle candidates are parts of the same plugin, not nine independent products. [Engineering evidence](engineering-candidates.json) records exact implementation and supporting-source URLs, revisions, license and prerequisites; [design evidence](design-hook-evidence.json) records the additional aesthetic hook. All inspected hooks are license-declared in their upstream projects. No global/user hook settings, plugin configuration, dependency manifests, schedules or application code were changed.

The eleven engineering-track source files independently match their recorded hashes in [hook-source-verification.json](hook-source-verification.json). The additional design-hook source is documented separately. No runtime hook behavior was tested.
