var LdapAuth = require('ldapauth-fork');


module.exports = function(auth_exports, unpm) {
  auth_exports.find = find_user
  auth_exports.create = create
  auth_exports.update = update

  auth_exports.auth = function(username, password, done) {
    var ldap = new LdapAuth(unpm.config.auth.config);
    ldap.authenticate(username, password, function(err, user) {
        if (err) {
          var invalid = new Error(err.message)
          return done(invalid)
        }
        done(null, clean_user(user))

    });
  }
  return auth_exports;
}



function clean_user(raw_user) {
  var user = {}

  user.name = raw_user.name
  user.email = raw_user.uid
  user.date = null

  return user
}

function find_user(username, done) {
  done(new Error('Cannot find a user with ldap backend. Please use ldap admin tools to do so.'))
}

function create(username, data, done) {
  done(new Error('Cannot create a new user with ldap backend. Please use ldap admin tools to do so.'))
}
function update(old, updated, done) {
  done(new Error('Cannot update a user with ldap backend. Please use ldap admin tools to do so.'))
}


