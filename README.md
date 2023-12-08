# GitHub search test task

## Getting started

run `npm start` and open http://localhost:3000/

## Run test

run `npm test`

## Components description

### ResultItem
Search item element

### ResultsList
Search list, render items, request more result on scroll to bottom, like live search
#### WARNING: live search work's not really best way, I know it, but wasn't able to make it better in short time, so left as it is.

### SearchBar
Search input and button, request new search on button click

### SearchContext
Context that unite components and share logic between them. Provide search state and callbacks to request new search and load more result to current search.

### Shell
Container that renders search components and wrap them in context.
