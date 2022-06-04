<!-- markdownlint-disable MD033 MD041 -->

<p align="center">
  <img src="https://raw.githubusercontent.com/g1eny0ung/logseq-github-theme/main/icon.png" alt="logo" height="128" />
</p>
<h1 align="center">logseq-github-theme</h1>

<p align="center">😻 GitHub themes for <a href="https://logseq.com/">Logseq</a>.</p>
<p align="center"><b>Now in Marketplace!</b> 🎉📢 You can install it via <b>Plugins -> Marketplace -> Themes</b>.</p>

## Screenshots

| Light                                 |
| ------------------------------------- |
| ![light.png](./screenshots/light.png) |

| Dark                                | Dark Dimmed                                       |
| ----------------------------------- | ------------------------------------------------- |
| ![dark.png](./screenshots/dark.png) | ![dark-dimmed.png](./screenshots/dark-dimmed.png) |

## Manual Installation

Here's how to install manually (But in most cases you don't need to do this):

### Offline

Download the theme (e.g. `light.css`) into your notes folder and rename it to `logseq/custom.css`.

### Online

Paste this line to your `logseq/custom.css`:

```css
@import url('https://cdn.jsdelivr.net/gh/g1eny0ung/logseq-github-theme@master/light.css');
```

Or paste this line to your `logseq/config.edn`:

```edn
{
  :custom-css-url "@import url('https://cdn.jsdelivr.net/gh/g1eny0ung/logseq-github-theme@master/light.css');"
}
```

## License

MIT

## Credits

Thanks to [github-vscode-theme](https://github.com/primer/github-vscode-theme) for the inspiration and logo.
