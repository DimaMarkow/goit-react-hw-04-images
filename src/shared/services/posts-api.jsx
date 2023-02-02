import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '31955836-4f23a30b6c1dc45c2c659779e',
    per_page: 12,
    image_type: 'photo',
  },
});

export const searchPosts = async (search, page) => {
  const { data } = await instance.get('/', {
    params: { q: search, page: page },
  });
  return data;
};

// fetch(
//   `https://pixabay.com/api/?key=31955836-4f23a30b6c1dc45c2c659779e&q=${this.props.filter}&image_type=photo&per_page=12&page=1`
// )
//   .then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(
//       new Error(`Нет фото соответствующих ${this.props.filter}`)
//     );
//   })
//   .then(data => {
//     this.setState({ images: data.hits });
//   })
//   .catch(error => {
//     this.setState({ error });
//   })
//   .finally(() => this.setState({ loading: false }));
