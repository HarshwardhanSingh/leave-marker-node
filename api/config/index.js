module.exports = function() {
  switch (process.env.NODE_ENV) {
    default:
      return (
        {
          DB_HOST: 'localhost',
          DB_USER: 'root',
          DB_PASSWORD: '',
          DB_NAME: 'leavemarker',
        }
      )
  }
}