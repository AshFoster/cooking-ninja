import { useFetch } from '../../hooks/useFetch' 

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList'

export default function Home() {
  const { data, isPending, error } = useFetch('https://3000-ashfoster-cookingninja-ra8jqzxyfw4.ws-eu64.gitpod.io/recipes')

  return (
    <div className='home'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {data && <RecipeList recipes={data} />}
    </div>
  )
}