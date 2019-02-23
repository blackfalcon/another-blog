# Deployment

Site is hosted with Surge.sh, `http://another-ui-blog.surge.sh/`

### Build and deploy

Domain is associated to a private account.

```
$ rm -rf .cache/
$ gatsby build
$ cd public/
$ surge
```

### Travis CI

Deploy process is automated with Travis CI.
