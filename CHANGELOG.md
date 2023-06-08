# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2023-06-08

This major version replace the old `.white-theme` selector with `.light-theme`. Some very old versions of Logseq may not support this change.

### Changed

- Replace `.white-theme` with `.light-theme`.

### Fixed

- Can not override `font-family`. [#13](https://github.com/g1eny0ung/logseq-github-theme/pull/13)

## [1.2.2] - 2022-12-31

### Fixed

- Update `.menu-link` style.

## [1.2.1] - 2022-06-04

### Changed

- Update `cloze` color to `attention.fg`.

### Fixed

- Revert card style to default. This avoids incompatibility with other plugins.
- Remove top offset in `code-lang`.
- Update screenshots.

## [1.2.0] - 2022-05-26

### Changed

- Update `TODO` bg color [#9](https://github.com/g1eny0ung/logseq-github-theme/pull/9)

### Fixed

- Fix left/right placement tooltips
- Fix the color of menu links
- Fix the style of checkboxes in all pages

## [1.1.0] - 2022-04-02

### Added

- Add `light-dark` and `light-dark-dimmed` themes. If you want to apply both light and dark themes, you should use them.

### Changed

- Update default `font-family` to `Inter`
- Simulate GitHub popper
- Unify guideline/block bullet/scrollbar colors in all themes

### Fixed

- Fix the color of selection
- Fix block highlight color
- Fix block/page properties background color
