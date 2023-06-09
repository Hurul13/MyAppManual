const material = [
  {
    id: '1',
    category: 'Pasir',
    shop: 'Hanil Jaya Stell',
    name: 'Pasir Pasang',
    ingredients: 'Pasir Pasang',
    image: require('../assets/Images/pasir.jpg'),
    price: 8.3,
    rating: 4.8,
    numReviews: 8,
    countInStock: 10,
    address: 'Kota Surabaya',
    status: 'Lunas',
    time: '30-03-2023 10.40',
    totalPrince: 6.6,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: '2',
    category: 'Batu',
    shop: 'Hanil Jaya Stell',
    name: 'Batu Coral',
    ingredients: 'Batu Coral',
    image: require('../assets/Images/batu.jpg'),
    price: 7.1,
    rating: 3.8,
    numReviews: 5,
    countInStock: 0,
    address: 'Kota Surabaya',
    status: 'Lunas',
    time: '30-03-2023 10.40',
    totalPrince: 14.2,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: '3',
    category: 'Genteng',
    shop: 'Hanil Jaya Stell',
    name: 'Genteng A Bagus',
    ingredients: 'Genteng A Bagus',
    image: require('../assets/Images/genteng.jpg'),
    price: 5.1,
    rating: 2.5,
    numReviews: 10,
    countInStock: 16,
    address: 'Kota Surabaya',
    status: 'Barang sudah diterima customer',
    time: '30-03-2023 10.40',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: '4',
    category: 'Besi',
    shop: 'Hanil Jaya Stell',
    name: 'Besi Beton',
    ingredients: 'Besi Beton',
    image: require('../assets/Images/besi.jpg'),
    price: 9.55,
    rating: 5,
    numReviews: 13,
    countInStock: 5,
    address: 'Kota Surabaya',
    status: 'Barang sudah diterima customer',
    time: '30-03-2023 10.40',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },

  {
    id: '5',
    category: 'Semen',
    shop: 'Hanil Jaya Stell',
    name: 'Semen Tiga Roda',
    ingredients: 'Semen Tiga Roda',
    image: require('../assets/Images/semen.jpg'),
    price: 6.45,
    rating: 4,
    numReviews: 12,
    countInStock: 3,
    address: 'Kota Surabaya',
    status: 'Barang sudah diterima customer',
    time: '30-03-2023 10.40',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: '6',
    category: 'Keramik',
    name: 'Keramik Motif Marmer',
    ingredients: 'Keramik Motif Marmer',
    shop: 'Hanil Jaya Stell',
    image: require('../assets/Images/keramik.jpg'),
    price: 8.1,
    rating: 3,
    numReviews: 15,
    countInStock: 0,
    address: 'Kota Surabaya',
    status: 'Barang sudah diterima customer',
    time: '30-03-2023 10.40',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: '7',
    category: 'Pasir',
    shop: 'Hanil Jaya Stell',
    name: 'Pasir Pasang',
    ingredients: 'Pasir Pasang',
    image: require('../assets/Images/pasir.jpg'),
    price: 8.3,
    rating: 4.8,
    numReviews: 8,
    countInStock: 9,
    address: 'Kota Surabaya',
    status: 'Barang sudah diterima customer',
    time: '30-03-2023 10.40',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: '8',
    category: 'Batu',
    shop: 'Hanil Jaya Stell',
    name: 'Batu Coral',
    ingredients: 'Batu Coral',
    image: require('../assets/Images/batu.jpg'),
    price: 7.1,
    rating: 4.8,
    numReviews: 5,
    countInStock: 10,
    address: 'Kota Surabaya',
    status: 'Barang sudah diterima customer',
    time: '30-03-2023 10.40',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: '9',
    category: 'Genteng',
    shop: 'Hanil Jaya Stell',
    name: 'Genteng A Bagus',
    ingredients: 'Genteng A Bagus',
    image: require('../assets/Images/genteng.jpg'),
    price: 5.1,
    rating: 4.8,
    numReviews: 10,
    countInStock: 13,
    address: 'Kota Surabaya',
    status: 'Barang sudah diterima customer',
    time: '30-03-2023 10.40',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: '10',
    category: 'Besi',
    shop: 'Hanil Jaya Stell',
    name: 'Besi Beton',
    ingredients: 'Besi Beton',
    image: require('../assets/Images/besi.jpg'),
    price: 9.55,
    rating: 4.8,
    numReviews: 13,
    countInStock: 0,
    address: 'Kota Surabaya',
    status: 'Barang sudah diterima customer',
    time: '30-03-2023 10.40',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },

  {
    id: '11',
    category: 'Semen',
    shop: 'Hanil Jaya Stell',
    name: 'Semen Tiga Roda',
    ingredients: 'Semen Tiga Roda',
    image: require('../assets/Images/semen.jpg'),
    price: 6.45,
    rating: 4.8,
    numReviews: 12,
    countInStock: 16,
    address: 'Kota Surabaya',
    status: 'Barang sudah diterima customer',
    time: '30-03-2023 10.40',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: '12',
    category: 'Keramik',
    name: 'Keramik Motif Marmer',
    ingredients: 'Keramik Motif Marmer',
    image: require('../assets/Images/keramik.jpg'),
    price: 8.1,
    rating: 4.8,
    numReviews: 15,
    countInStock: 0,
    status: 'Selesai',
    time: '30-03-2023 10.40',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
];

export default material;
