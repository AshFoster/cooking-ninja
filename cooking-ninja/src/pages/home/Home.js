import { useFetch } from '../../hooks/useFetch' 

// styles
import './Home.css'

export default function Home() {
  const { data, isPending, error } = useFetch('https://3000-ashfoster-cookingninja-ic7h8hmnlqs.ws-eu64.gitpod.io/recipes')

  return (
    <div className='home'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {data && data.map(recipe => (
          <h2 key={recipe.id}>{recipe.title}</h2>
        ))}
    </div>
  )
}
