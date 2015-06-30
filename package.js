Package.describe({
  name: 'edmodo',
  summary: 'Edmodo OAuth flow',
  git: 'https://github.com/merlinpatt/edmodo',
  version: '0.9.0',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('templating', 'client');
  api.use('underscore', 'client');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.export('Edmodo');

  api.addFiles(
    ['edmodo_configure.html', 'edmodo_configure.js'],
    'client'
  );

  api.addFiles('edmodo_server.js', 'server');
  api.addFiles('edmodo_client.js', 'client');
});
