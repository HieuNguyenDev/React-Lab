import './Search.css'

function Search() {
    return (
        <div className="search-container">
            <div className="form-control">
                <h3>Live Search: React Application</h3>
            </div>
            <div className="form-control">
                <div className="search-box">
                    <ion-icon className="icon-search" name="search-outline"></ion-icon>
                </div>
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    )
}

export default Search;