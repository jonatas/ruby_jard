---
id: Configurations
slug: configurations
---

Ruby Jard supports customization via pre-loaded configuration files. You can configure Jard both globally, and per-project.

- If `JARD_CONFIG_FILE` environment variable is available, Jard uses that file.
- The global configuration file is located at `~/.jardrc`.
- The project configuration file is located at `.jardrc` in working directory when you start Ruby Jard. Per-project ones override the global one.

There are some supported configurations:

| Name                | Description                                                  | Default | Values |
| ------------------- | ------------------------------------------------------------ | ------- | ------ |
| `color_scheme`      | Choose your favorite color scheme. See [color schemes page](/docs/guides/color-schemes) for more information.| `256`   | See [color-scheme command](/docs/commands/color-scheme) |
| `layout`      | By default, Ruby Jard chooses the layout based on current window size. This option allows you to force a layout. | `nil`   | `nil`, `tiny`, `wide`, `narrow-vertical`, `narrow-horizontal` |
| `enabled_screens` | Force display a subset of screens. This option correlates with recent layout's screens. | `[]`   | `backtrace`, `menu`, `source`, `threads`, `variables`|
| `filter` | Filter mode. See [filter page](/docs/guides/filter) for more information | `:application`   | `:everything`, `:gems`, `:application`, `:source_tree`|
| `filter_included` | Filter included pattern. See [filter page](/docs/guides/filter) for more information | `[]`   | |
| `filter_excluded` | Filter excluded pattern. See [filter page](/docs/guides/filter) for more information | `[]`   | |
| `alias_to_debugger` | Use `debugger` instead of `jard` when debugging. | `false`   | `true`, `false`|

This is a complete example of a configuration file:

```ruby
config.color_scheme = "deep-space"
config.alias_to_debugger = true
config.layout = "wide"
config.enabled_screens = ['backtrace', 'source']
config.filter = :gems
config.filter_included = ['active*', 'sidekiq']
config.filter_excluded = ['acts-as-taggable-on']
```
