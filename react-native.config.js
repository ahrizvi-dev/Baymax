module.exports = {
    project: {
        ios: {},
        android: {},
    },
    assets: ['./src/assets/fonts'], // Path to your fonts folder
    getTransformModulePath() {
        return require.resolve('react-native-typescript-transformer');
    },
    getSourceExts() {
        return ['ts', 'tsx'];
    },
};
