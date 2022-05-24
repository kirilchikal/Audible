const initialState = {
  authorList: [
    {
      id: 0,
      name: "Agatha Christie",
      imgUrl:
        "https://static.wikia.nocookie.net/science/images/b/be/Agatha3.jpg/revision/latest?cb=20160813030313&path-prefix=ru",
    },
    {
      id: 1,
      name: "J. K. Rowling",
      imgUrl:
        "https://c.ndtvimg.com/2020-05/ngh0qgoo_jk-rowling_625x300_27_May_20.jpg",
    },
    {
      id: 2,
      name: "Dan Brown",
      imgUrl:
        "https://img.etimg.com/thumb/msid-88557102,width-1200,height-900,imgsize-75900,overlay-etpanache/photo.jpg",
    },
    {
      id: 3,
      name: "Stephen King",
      imgUrl: "https://www.okino.ua/media/var/news/2021/06/02/Stephen_King.jpg",
    },
  ],
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authorReducer;
