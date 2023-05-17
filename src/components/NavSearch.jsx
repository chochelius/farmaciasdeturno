const Nav = ({ onSearchChange }) => {
    const handleSearchChange = (e) => {
      onSearchChange(e);
      console.log(e.currentTarget.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid px-4">
          <p className="navbar-brand "><h1 class="display-3 ms-4">Farmacias de turno</h1></p>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearchChange}
            />

            <button className="btn btn-outline-success" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path
                        fill-rule="evenodd"
                        d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 11-1.414 1.414l-3.85-3.85a1 1
                        0 010-1.415z"
                        clip-rule="evenodd"
                    />
                    <path
                        fill-rule="evenodd"
                        d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5
                        0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5
                        6.5 0 0113 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>

          </form>
        </div>
      </nav>
    );
  };
  
  export default Nav;
