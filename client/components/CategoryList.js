import React from 'react';
import CategoryDetail from './CategoryDetail';

const CATEGORIES = [
    {title: 'Grammar', link: 'http://www.jabbalab.com/blog/wp-content/uploads/2015/06/German-Definite-ARticle.jpg'},
    {title: 'Vocabulary', link: 'https://www.deutsch-perfekt.com/vokabeln-lernen/deutsch/deutsch-wort-des-tages.png'},
    {title: 'Reading comprehension', link: 'http://vs-brixlegg.tsn.at/images/lesen_200.gif'},
]

  const CategoryList = (props) => {


    const RenderedImages = CATEGORIES.map(function(category){
        return <CategoryDetail key={category.title} category ={category}/>
    });

    return(
        <ul className="media-list list-group">
            <h3> What do you want to learn? </h3>
           {RenderedImages}
        </ul>
    );
}

export default CategoryList;
