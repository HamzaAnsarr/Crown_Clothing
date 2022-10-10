import "./Category_container.component.scss"
import Category_list from "../category_list/Category_list.component"
import CategoryItem from "../category_items/Category_item.component"

const Category_container = ()=>{
    return(
        <div className="categories_container">
      {Category_list.map((category)=>{             //destructuring //{title} means title.title     
        return(
          <CategoryItem key={category.id} category={category} />
        )
      })}
    </div>
    )
}

export default Category_container