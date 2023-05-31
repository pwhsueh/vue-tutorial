const app = Vue.createApp({
  //   template: `<h2>I am the templdate</h2>`,
  data() {
    return {
      url: 'https://www.google.com',
      showBooks: true,
      books: [
        {
          img: 'assets/1.jpg',
          isFav: true,
          title: 'The Final Empire',
          author: 'Brandon Sanderson',
        },
        {
          img: 'assets/2.jpg',
          isFav: false,
          title: 'The Final Empire 1',
          author: 'Brandon Sanderson 1',
        },
        {
          img: 'assets/3.jpg',
          isFav: true,
          title: 'The Final Empire 2',
          author: 'Brandon Sanderson 2',
        },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      console.log('you clicked me!');
      this.title = title;
    },
    toogleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    // handleMousemove(e) {
    //   this.x = e.offsetX;
    //   this.y = e.offsetY;
    // },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount('#app');
