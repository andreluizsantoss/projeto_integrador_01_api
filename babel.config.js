module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        "@modules": "./src/modules",
        "@shared": "./src/shared",
        "@users": "./src/modules/users",
        "@fixedActivities": "./src/modules/fixedActivities",
        "@fixedBenefits": "./src/modules/fixedBenefits",
        "@fixedDependencies": "./src/modules/fixedDependencies",
        "@patients": "./src/modules/patients",
        "@patientBenefits": "./src/modules/patientBenefits",
        "@patientDependencies": "./src/modules/patientDependencies",
        "@historyActivities": "./src/modules/historyActivities",
        "@config": "./src/shared/config",
      }
    }],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
  ],
}
