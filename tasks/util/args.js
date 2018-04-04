import yargs from 'yargs';

const args = yargs

    // 区分开发或者线上环境
    .option('production', {
        // 参数类型
        boolean: true,
        // 参数默认值
        default: false,
        // 参数描述
        describe: 'min all scripts'
    })

    // 监听代码
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    // 命令行执行日志
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })

    // sourcemap映射
    .option('sourcemaps', {
        describe: 'force the creation of sourcemap'
    })

    //监听端口
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })

    .argv
    
    export default args;