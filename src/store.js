function insertAndUpdateListToLocalStorage(data) {
    const list = getDataFromLocalStorage('user-list');
    if (list) {
        list.push(data);
        setDataToLocalStorage('user-list', list);
    } else {
        setDataToLocalStorage('user-list', [data]);
    }
}

function checkIfUserExistsInLocalStorage(data) {
    const list = getDataFromLocalStorage('user-list');
    if (list) {
        return list.find(user => user.email === data.email && user.password === data.password);
    }
    return null;
}

function setDataToLocalStorage(key, data) {
    if (typeof data === 'object') {
        localStorage.setItem(key, JSON.stringify(data));
    } else if (typeof data === 'string') {
        localStorage.setItem(key, data);
    } else {
        throw new Error('Invalid data type. Only objects and strings are supported.');
    }
}

function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    if (data) {
        try {
            return JSON.parse(data);
        } catch (error) {
            return data;
        }
    }
    return null;
}

export {
    setDataToLocalStorage,
    getDataFromLocalStorage,
    insertAndUpdateListToLocalStorage,
    checkIfUserExistsInLocalStorage
}