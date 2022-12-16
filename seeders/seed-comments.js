const db = require('../modules')

async function seed() {
    let place = await db.Place.findOne({name: 'H-Thai-ML'})

    let comment = await db.Comment.create({
        author: 'Fam Fran',
        rant: false,
        stars:5.0,
        content: 'Wow, so freakin good!'
    })

    place.comments.push(comment.id)

    await place.save()

    process.exit()
}

seed()