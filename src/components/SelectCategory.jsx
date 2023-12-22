const SelectCategory = () =>{

    return(
        <div className="d-flex justify-content-between mx-5">
          <div className="d-flex">
            <h2 className="mb-4 me-2">TV Shows</h2>
            <div className="dropdown ml-4 mt-1">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0 bg-sel-cat"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Genres &nbsp;
              </button>
              <div
                className="dropdown-menu bg-dark"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item text-white bg-dark" href="#">Comedy</a>
                <a className="dropdown-item text-white bg-dark" href="#">Drama</a>
                <a className="dropdown-item text-white bg-dark" href="#"
                  >Thriller</a
                >
              </div>
            </div>
          </div>
          <div>
            <i className="fa fa-th-large icons"></i>
            <i className="fa fa-th icons"></i>
          </div>
        </div>
        
    )

}

export default SelectCategory