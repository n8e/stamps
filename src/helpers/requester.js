const BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_KEY = process.env.REACT_APP_PIXABAY_KEY;

const Users = [{
  email: 'peter@microsoft.com',
  password: 'Aa11%$cccc'
}, {
  email: 'steve.creek@mydomain.net',
  password: 'g$jkKK44Q!'
}];


export const loginRequester = (data = {}) => {
  return new Promise((resolve, reject) => {
    const hasBothCredentials = Boolean(data.email && data.password);
    const existingUser = Users.find(user => user.email === data.email);
    const isExistingUserPassword = existingUser && (existingUser.password === data.password);
    let message = '';

    if (!hasBothCredentials) {
      message = 'Email and password are required to login';
    }

    if (!existingUser) {
      message = 'User with this email does not exist';
    }
    
    if (existingUser && !isExistingUserPassword) {
      message = 'You have entered a wrong password for this user';
    }

    if (message) {
      reject({ data: null, error: new Error(message) });
    }

    resolve({ data: { success: true }, error: null });
  });
};

export const imageRequester = async ({ page, topic }) => {
  const images = await fetch(`${BASE_URL}?key=${PIXABAY_KEY}&lang=en&page=${page}&per_page=25&image_type=all&q=${topic}`)
    .then((response) => response.json())
    .then((data) => data && data.hits);

  const videos = await fetch(`${BASE_URL}videos/?key=${PIXABAY_KEY}&lang=en&page=${page}&per_page=25&video_type=all&q=${topic}`)
    .then((response) => response.json())
    .then((data) => data && data.hits);
    
  return [...images, ...videos].sort((a, b) => a.tags > b.tags);
}
