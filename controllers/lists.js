const List = require('../models/list');

module.exports = {
    create,
    deleteLike
}

async function create(req, res){

    try {
        const list = await List.findById(req.params.id);
        list.likes.push({username: req.user.username, userId: req.user._id});
        await list.save()
        res.status(201).json({data: 'like added'})
    } catch(err){
        res.json({data: err})
    }
}

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }

async function deleteLike(req, res) {
    try {
        const list = await List.findOne({'likes._id': req.params.id, 'likes.username': req.user.username});
        list.likes.remove(req.params.id)
        await  list.save()
        res.json({data: 'like removed'})
    } catch(err){
        res.json({error: err})
    }
}