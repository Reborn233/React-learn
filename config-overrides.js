const {injectBabelPlugin} = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(
        ['import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true
            }
        ],
        config);
    config = rewireLess.withLoaderOptions({
        modifyvars:{
            "@primary-color":"#4C4B4B"
        },
    })(config,env)
    return config;
};