import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../../redux/charactersSlice';

function Home() {
  const characters=useSelector(state  => state.characters.items.results);
  
  const dispatch=useDispatch();
  console.log(characters)
  useEffect(()=> {
    dispatch(fetchCharacters());
  },[dispatch]);
  return (
    <div>
      

      {
        characters.map(character=> (
          <div key={character.id}>
            <p>{character.name}</p>
            <img src={character.image} alt="" />
          </div>
        ) )
      }
    </div>
  )
}

export default Home;