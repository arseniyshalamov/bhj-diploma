/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    if (options.method === 'GET') {
        options.url += '?';
        for (let key in options.data) {
            options.url += key + '=' + options.data[key] + '&';
        }
        xhr.open(options.method, options.url);
    } else {
        for (let key in options.data) {
          formData.append(key, options.data[key]);
        }
        xhr.open(options.method, options.url);
    }
    xhr.responseType = 'json';
    xhr.onload = () => {
        // היו במקום load - readystatechange
      if (xhr.readyState === 4) {
        options.callback(null, xhr.response);
      }
    };
  
    xhr.onerror = (e) => {
      options.callback(e);
    };
  
    try {
      xhr.send(options.method === 'GET' ? null : formData);
    } catch (e) {
      options.callback(e);
    }
};