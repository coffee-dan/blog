---
author: me
favicon: 🤖
---

Description of options for debugging standalone go program (not a web server).

## VSCode In-IDE Debugger

```rb
def foo
    puts 'foo'
end
```

1. have launch.json
```json
{
    "name": "Launch Package",
    "type": "go",
    "request": "launch",
    "mode": "auto",
    "program": "${fileDirname}",
    "console": "integratedTerminal",
    "showGlobalVariables": true
},
```
2. hit Launch
3. Interact with program inside of xterm.js

## Other considerations

### bubbletea

1. Insert logToFile somewhere near entry point to program
```go
if len(os.Getenv("DEBUG")) > 0 {
    f, err := tea.LogToFile("debug.log", "debug")
    if err != nil {
        fmt.Println("fatal:", err)
        os.Exit(1)
    }

    defer f.Close()
}
```
2. Add logging wrapped in `DEBUG` checks
```go
if len(os.Getenv("DEBUG")) > 0 {
    log.Println(foo)
}
```
