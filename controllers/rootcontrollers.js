


const books = [
    {id:1, title:'book1', author:'keshav'},
    {id:2, title:'book2', author:'raghav'},
    {id:3, title:'book3', author:'mahesn'},
    {id:4, title:'book4', author:'prajjal'},
]

const getbooks = (req,res)=>{
    res.json(books)
}

const createbooks = (req,res)=>{
    console.log(req.body)
    const newBook = req.body
    newBook.id = books.length+1;
    books.push(newBook)

    res.status(201).json(newBook)
}

const updatebooks = (req,res)=>{
    const id = parseInt(req.params.id)
    const updateBook =  req.body
    const index = books.findIndex(book => book.id === id)

    if(index !== -1){
        books[index]= {...books[index],...updateBook}
        res.json(books[index])
    }
    else{
        req.status(404).json('book not found')
    }
}


const deletebooks = (req,res)=>{
    const id = parseInt(req.params.id)
    const index = books.findIndex(book => book.id === id)

    if(index !== -1){
        const deleteBook = books[index]
        books.slice(index,1)
        res.json(deleteBook)
    }
    else{
        req.status(404).json('book not found')
    }
}


module.exports = {
    getbooks,
    createbooks,
    updatebooks,
    deletebooks
}