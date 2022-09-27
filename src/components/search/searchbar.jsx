

import SearchField from 'react-search-field';
import{onSearchClick} from 'react-search-field'

const searchBar = () => {
    return(
      
     <div className="searchbar">
      <SearchField placeholder='Search item' 
      onSearchClick={onSearchClick} />
     </div>
 )
}

export default searchBar;




