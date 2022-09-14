import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'https://3000-ashfoster-cookingninja-ra8jqzxyfw4.ws-eu64.gitpod.io/recipes/' + id
  const { data: recipe, isPending, error } = useFetch(url)


  return (
    <div className='recipe'>
        {isPending && <p className='loading'>Loading...</p>}
        {error && <p className='error'>{error}</p>}
        {recipe && (
          <>
            <h2 className='page-title'>{recipe.title}</h2>
            <p>Takes {recipe.cookingTime} to cook.</p>
            <ul>
              {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
            <p className='method'>{recipe.method}</p>
          </>
        )}
    </div>
  )
}
