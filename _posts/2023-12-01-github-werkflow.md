---
author: me
favicon: ⚡
---

Collection of aliases that describe my git/github workflow. Especially when working in a team.

# git

## Hurry, before I forget

```sh
# [g]it [n]ew [b]ranch
alias gnb="git stash --include-untracked && git checkout main && git pull && git checkout -b"

gnb dgr/foobar-baz-quux
```

Stash everything, update main, branch off of it, start writing, fail to forget.

## Oops, one more thing!

```sh
# [g]it [c]ommit [a]mend [a]ll
alias gcaa="git commit -a --amend --no-edit"

gcaa
```

Amend to last commit, move on.

## Save my work

```sh
# [g]it [p]ush [s]et [up]stream
alias gpsup="git push --set-upstream origin"

gpsup
```

Give origin server your new branch, move on.


## Wait, where was I?

```sh
# [g]it [c]heck [h]istory
#   requires a copy of ripgrep and fuzzyfind from wherever you source your packages
alias gch="git reflog show --pretty=format:'%gs' | rg 'checkout:' | rg -o '[^ ]+$' | awk '!seen[\$1]++' | tail -n +2 | fzf | xargs git checkout"

gch
```

Check git checkout history, display in fuzzy find, get back to what you were doing.


# github

## I do not want to run tests locally

```sh
# [g]it[h]ub [draft]
alias ghdraft="git push --set-upstream origin && gh pr create --assignee @me --fill --draft && gh pr view --web"

ghdraft
```

Give origin server your new branch, create pull request, open in browser, go get coffee.
