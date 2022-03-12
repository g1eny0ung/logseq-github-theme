<img src="./icon.png" alt="logo" height="128" />

# [logseq](https://logseq.com/)-github-theme

😻 GitHub themes for Logseq.

## Screenshots

| Light                                 | Dark                                | Dark Dimmed                                       |
| ------------------------------------- | ----------------------------------- | ------------------------------------------------- |
| ![light.png](./screenshots/light.png) | ![dark.png](./screenshots/dark.png) | ![dark-dimmed.png](./screenshots/dark-dimmed.png) |

## Manual Installation

Here's how to install manually:

### Offline

Download the theme (e.g. `light.css`) into your Notes folder and rename it to `logseq/custom.css`.

### Online

Paste this line to your `logseq/custom.css` file:

```css
@import url("https://cdn.jsdelivr.net/gh/g1eny0ung/logseq-github-theme@master/light.css");
```

OR

Paste this line to your `logseq/config.edn` file:

```edn
{
  :custom-css-url "@import url('https://cdn.jsdelivr.net/gh/g1eny0ung/logseq-github-theme@master/light.css');"
}
```

## License

MIT @ [g1eny0ung](https://github.com/g1eny0ung)

Thanks to [github-vscode-theme](https://github.com/primer/github-vscode-theme) for the inspiration and logo.
