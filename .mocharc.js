module.exports = {
  require: ['@babel/register'],
  timeout: '5000',
  spec: 'specs/**/*.js',
  exclude: 'specs/example.js',
  file: 'project-config/auth-global-hook.js',
  reporter: 'mochawesome',
  reporterOption: [
    'json=false',
    'quiet=true',
    'reportFilename=UpdatedReport',
    'reportDir=MyReports',
    'reportFilename=[status]_[datetime]_ReportName',
  ],
}
