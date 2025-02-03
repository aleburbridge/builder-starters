# builder-starters

This repository contains a collection of starter projects for Builder.

## builder-api-tests

This folder contains scripts to test the Builder API.


## Testing

The way I reproduce bugs is by copying the relevant folder from this repo to a new directory and then making changes in a copy. 
This is because I regularly update this repo and don't want to accidentally commit some irrelevant changes. 
But an easier way to do test with this repo would be to change the files directly, and if you ever need a clean slate, you can just pull from this repo again:

```
git fetch
git checkout main
git reset --hard origin/main
```