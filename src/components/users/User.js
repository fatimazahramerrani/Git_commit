
import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
export class User extends Component {
    render() {


        const { login, avatar_url, html_url, repos_url, type} = this.props.user;


        return (
            <div>
                <div class="card">
                            <img class="card-img-top" src={avatar_url} alt="" />
                            <div class="card-body">
                                <h4 class="card-title">{login}</h4>
                                <p class="card-text">
                                    <Link to={'/users/'+login} className="btn btn-info"> Show more </Link>
                                    <a href={repos_url} className="btn btn-primary"> Repositories </a>
                                    <a href={html_url} className="btn btn-secondary"> profil </a>
                                    
                                </p>
                            </div> 
                        </div>
            </div>
        )
    }
}

export default User
