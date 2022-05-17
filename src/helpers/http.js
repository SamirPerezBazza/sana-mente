import axios from 'axios';

const successResponses = Array.from(new Array(200), (_, index) => {
  return index + 200;
});

export async function get(url, options) {
  const header = new Headers();
  if (!options) {
    const { headers = {} } = options;
    Object.assign(header, headers);
  }

  const result = {
    response: {},
    status: 200,
    error: false,
  };
  try {
    const response = await axios(url, {
      method: 'GET',
      headers: {
        redirect: 'follow',
        'Access-Control-Allow-Headers': 'X-Requested-With, privatekey',
      },
    });
    result.status = response.status;
    result.response = response.data;
  } catch (e) {
    if (e.response !== undefined) {
      const { status, data } = e.response;
      result.status = status;
      result.response = data;
      result.error = true;
    }
    return result;
  }
}

async function post(url, options, msgErr) {
  const header = new Headers();

  let data;
  if (options) {
    const { headers = {}, body = {} } = options;
    header.append('Content-Type', ' application/json');
    Object.assign(header, headers);
    console.log(body)
    data = body;
  }
  const result = {
    response: {},
    status: 200,
    error: false,
  };

  try {
    const response = await axios(url, {
      method: 'POST',
      headers: header,
      data,
    });
    result.status = response.status;
    result.response = response;
  } catch (e) {
    const { status, data } = e.response;

    result.status = status;
    result.response = data;
    result.error = true;
  }

  return result;
}

async function put(url, options) {
  const header = new Headers();
  let data;
  if (!options) {
    const { headers = {}, body = {} } = options;
    header.append('Content-Type', ' application/json');
    Object.assign(header, headers);
    data = body;
  }
  const result = {
    response: {},
    status: 200,
    error: false,
  };
  try {
    const response = await axios(url, {
      method: 'PUT',
      headers: {
        redirect: 'follow',
        'Access-Control-Allow-Headers': 'X-Requested-With, privatekey',
      },
      data,
    });
    result.status = response.status;
    result.response = response;
  } catch (e) {
    const { status, data } = e.response;
    result.status = status;
    result.response = data;
    result.error = true;
  }
  return result;
}

async function _delete(url, options) {
  const header = new Headers();
  let data;
  if (!options) {
    const { headers = {}, body = {} } = options;
    Object.assign(header, headers);
    data = body;
  }
  const response = await fetch(url, {
    method: 'DELETE',
    headers: header,
    body: JSON.stringify(data),
  });
  const result = {
    response: await response.json(),
    status: response.status,
    error: false,
  };
  if (!successResponses.includes(result.status)) {
    result.error = true;
  }
  return result;
}

const http = {
  get,
  post,
  put,
  delete: _delete,
};

export default http;
