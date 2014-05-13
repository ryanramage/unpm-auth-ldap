unpm-auth-ldap
==============

Use ldap as authentication for your private npm.

Usage
-----

1. First you must have unpm installed. See https://github.com/hayes/unpm
2. In the unpm directory do `npm install unpm-auth-ldap`
3. Alter the unpm/lib/config.json make it look like

```
  "auth" : {
    "authenticated_gets": true,
    "whitelist": ["/_session"],
    "module" : "unpm-auth-ldap",
    "config": {
      "url": "ldap://my.ldap.com:389",
      "searchBase": "ou=Users,dc=dago2",
      "searchFilter": "(uid={{username}})",
      "verbose": true
    }
  }
```

The config section is from ldapauth. See https://www.npmjs.org/package/ldapauth-fork for config

.npmrc
-------

To help store your ldap credentials in a .npmrc file, you can use this small util:

    npm install unpm-auth-ldap
    cd unpm-auth-ldap
    node bin/generate-ldap-npmrc <username> <password> <email>

Where username and password are your ldap credentials.


