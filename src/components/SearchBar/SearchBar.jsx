

const SearchBar = ({setInput, input}) => {

    const changeInput= (event) => {
        setInput(event.target.value)
        console.log(event.target.value)

    }

    return ( 
        <div class="input-group rounded">
            <input type="search" value={input} onChange={(e) => changeInput(e)} class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
            </span>
        </div>


    );
}
 
export default SearchBar;