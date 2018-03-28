const request = (url: string, data: any) => {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  const options = {
    headers,
    method: 'post',
    body: JSON.stringify(data),
  };

  const slashCleanUrl = url.replace(/^\//, '');

  return fetch(`http://127.0.0.1:4000/${slashCleanUrl}`, options)
    .then(res => res.json());
};

export default request;
