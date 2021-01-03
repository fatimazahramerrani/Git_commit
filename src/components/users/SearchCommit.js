import React, { Component } from 'react'

export class SearchCommit extends Component {

    state = {
        search: ''
    }

    handleForm = (e) => { 
        this.setState({
            search: e.target.value
        })
    }

    SearchCommit = (e) => {
        e.preventDefault();
        this.props.getCommitSearch(this.state.search)
    }

    render() {
        const { search } = this.state;
        return (
            
                <form onSubmit={this.searchCommit}>
                    <div className="form-group ">
                        <input onChange={this.handleForm} value={search} placeholder="search_commit..." id="search" type="text" className="form-control"/>

                    </div>
                    
                    <button className="btn btn-danger btn-block">search commit</button>
                    </form>  
            
        )
    }
}

export default SearchCommit
