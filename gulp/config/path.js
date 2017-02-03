var src = './app/',
    dist = './web/';

module.exports = {
    server: {
        root: dist + '',
        watch: dist + '**/*.*'
    },
    mjml: {
        src: src + '*.*',
        dist: dist + '',
        task: 'mailing'
    },
    images: {
        src: src + 'images/**/*.*',
        dist: dist + 'images/',
        task: 'images'
    },
};
