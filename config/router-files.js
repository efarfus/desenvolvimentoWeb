const filenames ={
    //blog REST
    'blog/api/v1/rest': [
        'post-resource',
        'reply-resource'
    ]
};

function toFilesList(imports, folder){
    return[...imports, ...filenames[folder].map(toRelativePaths(folder))]
}

function toRelativePaths(folder){
    return filename => {
        return `../src/module/${folder}/${filename}`
    }
}

module.exports = Object.keys(filenames).reduce(toFilesList, [])