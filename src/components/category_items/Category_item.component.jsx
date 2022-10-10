
import "./Category_item.component.scss"

const CategoryItem  = ({category}) => {
    const {title , imageUrl} = category
  return (
    <div className="category_container"> 
        <div className="image_div" style={{ "backgroundImage" : `url(${imageUrl})` }} />  {/* custom css */}
        <div className="category_body_container">        
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
  )
}

export default CategoryItem