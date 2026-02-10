# Today I Learned

https://call-me-bammer.github.io/TIL/

### Environment (as of 26.02.10)
```
$ sw_vers
ProductName:            macOS
ProductVersion:         15.0.1
BuildVersion:           24A348
$ node -v
v24.13.0
$ npm -v
11.6.2
```

### Build locally (as of 26.02.10)

```
$ brew install yarn
$ yarn -v
1.22.22
$ yarn add -D vuepress
$ yarn docs:dev
```

### Shell Script Deploy

```
(check remote && install node, npm, yarn)
$ yarn install
$ sh deploy.sh
```

### Issues

- [x] Node 17 openssl 3.0 Webpack issue

```
(install nodejs latest)
$ export NODE_OPTIONS=--openssl-legacy-provider

/* Reference */
https://github.com/webpack/webpack/issues/14532
```

- [x] Authentication failed for remote setting
```
$ git remote set-url origin https://call-me-bammer:{token}@github.com/call-me-bammer/TIL/
```

- [ ] Node 24 openssl 3.0 Webpack 4 issue

### Progress

```
2022. 02. 01. - manual deployment by deploy.sh
2022. 06. 12. - fix Node 17 openssl 3.0 Webpack issue
2022. 10. 04. - fix local-build method as of today on Ubuntu 20.04 LTS
```
