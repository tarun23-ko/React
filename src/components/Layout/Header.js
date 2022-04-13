import React from 'react'

const HeaderData=()=>{

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <div><h1>Food App</h1></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  
                    </ul>
   
                    <button className="btn btn-danger" >Cart(0)</button>
                  
                </div>
            </div>
        </nav>


    )
}

export default HeaderData;