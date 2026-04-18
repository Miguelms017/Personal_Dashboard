module.exports = function (eleventyConfig) {

    // copy
    eleventyConfig.addPassthroughCopy("src/script");

    // dirs
    return{
        dir: {
            input: "src",
            output: "public",
        },
    };
};