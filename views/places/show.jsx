const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'> 
            Not yet rated!
        </h3>
    )
    if (data.place.comments.length) {
       let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
       }, 0)
       let averageRating = Math.round(sumRatings / data.place.comments.length)
       let stars = ''
       for (let i = 0; i < averageRating; i++) {
        stars+= 9733
       }
       rating = (
        <h3>
           {stars} stars
        </h3>
       ) 
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'} </h2>
                    <h4> {c.content} </h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4> Rating: {c.stars} </h4>
                </div>
            )
        })
    }
    return (
        <Def>
        <main>
            <div className='row'>
            <div className="col-sm-6">
              <img src={data.place.pic} alt={data.place.name} />
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
            </div>
            <div className="col-sm-6">
              <h1>{ data.place.name }</h1>
              <h2>
                Rating
              </h2>
                {rating}
              <br />
              <h2>
                Description
              </h2>
              <h3>
                {data.place.showEstablished()}
              </h3>
              <h4>
                Serving {data.place.cuisines}
              </h4>
              <br />
              <h2></h2>
              <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                Edit
              </a>{` `}
              <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
              </div>
            </div>
                <h2> Comments </h2>
                {comments}
                    <h3> Wanna Rant or Rave? </h3>
                    <form action={`/places/${data.place.id}/comment`} method='POST'>
                        <div className='form-group col-sm-2'>
                            <label htmlFor='author'> Author </label>
                            <input className='form-control' id= 'author' name= 'author' required></input>
                        </div>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='sRating'> Star Rating </label>
                            <input className='form-control' id= 'starRating' name='sRating' required></input>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='rant'> Getting Something Off your Chest? </label>
                            <input className='form-control' type='checkbox' value='Rant?' id='rant' name='rant'></input>
                        </div>
                        <div className='form-group col-sm-8'>
                            <label htmlFor='content'> Type Review Here </label>
                            <input className='form-control' id='content' name='content'></input>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Add Review" />
                    </form>
        </main>
        </Def>
    )
}

module.exports = show
