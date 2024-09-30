const getSessionData = name => sessionStorage[name];
const setSessionData = (name, value) => (sessionStorage[name] = value);

const getLocalStorage = key => globalThis.localStorage?.getItem(key);
const setLocalStorage = (key, value) => globalThis.localStorage?.setItem(key, value);
const removeLocalStorage = key => globalThis.localStorage?.removeItem(key);

const isDefined = v => typeof v !== 'undefined' && v !== null;
const isEmpty = obj => Object.keys(obj).length === 0;
const isObject = obj => typeof obj === 'object' && !Array.isArray(obj) && obj !== null;

const isImageUrl = file => {
    const imageExt = ['gif', 'jpg', 'jpeg', 'png'];
    const matched = file.match(/.[a-zA-Z0-9]+$/);
    const extension = Array.isArray(matched) ? matched[0].slice(1) : '';
    return imageExt.includes(extension);
};

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function escapeDanger(content) {
    const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gim;

    if (regex.test(content)) return undefined;
    return { __html: content };
}

function parseHTMLTags(content) {
    const regex = /(<([^>]+)>)/gim;

    return content ? content.replace(regex, '') : content;
}

const parseLinks = text => {
    const urlRegex = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])/;
    return text.replace(urlRegex, url => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
};

const isString = value => typeof value === 'string';

const isImage = file => file['type'].split('/')[0] === 'image';
const isVideo = file => file['type'].split('/')[0] === 'video';

export {
    getSessionData,
    setSessionData,
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
    isDefined,
    isEmpty,
    getBase64,
    escapeDanger,
    isImageUrl,
    isObject,
    isString,
    parseHTMLTags,
    parseLinks,
    isImage,
    isVideo,
};
