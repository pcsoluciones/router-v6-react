import { Link, useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Blog = () => {

  let [searchParams, setSearchParams] = useSearchParams()

  const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts')
  //console.log(data)

  if (loading){
    return <h2>Loading</h2>
  }

  if (error !== ''){
    return <h2>{error}</h2>
  }

  const handleChange = (e) => {
    let filter = e.target.value
    if (filter) {
      setSearchParams({filter})
    } else {
      setSearchParams({})
    }
  }

  return (
    <div>
        <h1>Blog</h1>

        <input 
          className="form-control mb-2"
          type="text" 
          value={searchParams.get('filter') || ''}
          onChange={handleChange}
        />

        {
          data.filter(item => {
            let filter = searchParams.get('filter')
            if (!filter) return true    // si escribió algo en filter

            let title = item.title.toLowerCase()
            return title.startsWith(filter.toLowerCase())   // true si cadena de texto comienza con los caracteres
          }).map((item) => (    // a este resultado que es un array le aplicamos un map
            <h4 key={item.id}>
              <Link to={`/blog/${item.id}`}>
                {item.id} - {item.title}
              </Link>
            </h4>
          ))
        }

    </div>
  )
}

export default Blog