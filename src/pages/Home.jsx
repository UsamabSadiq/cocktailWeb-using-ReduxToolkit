import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCocktails } from '../redux/features/cocktailSlice'
import SpinnerAnim from '../components/SpinnerAnim'
import { Link } from 'react-router-dom'

const Home = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([])
  const { loading, cocktails, error } = useSelector(state => ({ ...state.app }))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCocktails())
  }, [])
  //changing names of the keys of object  coming from api.
  useEffect(() => {
    if (cocktails) {
      // api sa jo drinks ka data mila uss ko eik variable (newCocktails) ma store kraya,
      // phir object destructure k through api k data sa kuch property li aur return statement ma unn ka naam change kra dya.  
      const newCocktails = cocktails.map(item => {
        const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } = item
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass
        }
      })
      // setting new cocktails names into our state
      setmodifiedCocktails(newCocktails)
    } else {
      setmodifiedCocktails([])
    }
  }, [cocktails])
  if (loading) {
    return <SpinnerAnim />
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return (
    <Layout>
      <div className="container">
        <div className="row">
          {modifiedCocktails.map((item) => {
            return (
              <div className="col-md-3 mt-3 m-1 " key={item.id}>
                <div className="card" style={{ width: '18rem' }}>
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h4 className="card-text">{item.info}</h4>
                    <p className="card-text">{item.glass}</p>
                    <Link to={`/products/${item.id}`} className="btn btn-primary">Details</Link>
                  </div>
                </div>
              </div>
            )

          })}
        </div>
      </div>

    </Layout>
  )
}

export default Home
