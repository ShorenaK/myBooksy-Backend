const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    pages: {type: Number, required: true},
    description: {type: String},
    publishDate: {type: Date, required: true},
    link: {type: String},
    likes: {type: Number}
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book

// Book.create({
//     title: 'Fairy Tale',
//     image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781668002179_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
//     author: 'Stephen King',
//     genre: 'Fiction',
//     pages: 608,
//     publishDate: new Date(2022, 8, 06),
//     description: "Charlie Reade looks like a regular high school kid, great at baseball and football, a decent student. But he carries a heavy load. His mom was killed in a hit-and-run accident when he was ten, and grief drove his dad to drink. Charlie learned how to take care of himself—and his dad. When Charlie is seventeen, he meets a dog named Radar and her aging master, Howard Bowditch, a recluse in a big house at the top of a big hill, with a locked shed in the backyard. Sometimes strange sounds emerge from it.",
//     link: 'https://www.barnesandnoble.com/w/fairy-tale-stephen-king/1140917915?ean=9781668002179',
//     likes: 0
// })

// Book.create({
//     title: 'The Rising Tide',
//     image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781250204530_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
//     author: 'Ann Cleeves',
//     genre: 'Fiction',
//     pages: 384,
//     description: "For fifty years a group of friends have been meeting regularly for reunions on Holy Island, celebrating the school trip where they met, and the friend that they lost to the rising causeway tide five years later. Now, when one of them is found hanged, Vera is called in. Learning that the dead man had recently been fired after misconduct allegations, Vera knows she must discover what the friends are hiding, and whether the events of many years before could have led to murder then, and now . . .",
//     publishDate: new Date(2022, 8, 06),
//     link: 'https://www.barnesandnoble.com/w/the-rising-tide-ann-cleeves/1141120649?ean=9781250204530',
//     likes: 0
// })

// Book.create({
//     title: "I'm Glad My Mom Died",
//     image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781982185824_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
//     author: 'Jennette McCurdy',
//     genre: 'Non-Fiction',
//     pages: 320,
//     description: "Jennette McCurdy was six years old when she had her first acting audition. Her mother’s dream was for her only daughter to become a star, and Jennette would do anything to make her mother happy. So she went along with what Mom called “calorie restriction,” eating little and weighing herself five times a day. She endured extensive at-home makeovers while Mom chided, “Your eyelashes are invisible, okay? You think Dakota Fanning doesn’t tint hers?” She was even showered by Mom until age sixteen while sharing her diaries, email, and all her income.",
//     publishDate: new Date(2022, 9, 09),
//     link: 'https://www.barnesandnoble.com/w/im-glad-my-mom-died-jennette-mccurdy/1140377015?ean=9781982185824',
//     likes: 0
// })
