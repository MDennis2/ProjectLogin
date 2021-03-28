import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export const HomeScreen = () => {
    return (
        
        <>
        <form>
            <h3 className="home__title">Project Name</h3>
        <input
                className="home__input"
                type="text"
                autoComplete="off"
                name="project_name"
                placeholder="Project Name"
            />
            <h3 className="home__title">Organization Name</h3>
            <input
                className="home__input"
                type="text"
                autoComplete="off"
                name="organization_name"
                placeholder="Organization Name"
            />
            <div className="btn__container">
            <button
                className="btn btn-primary btn-block"
            > 
                Upload Logo
            </button>
            <button
                className="btn btn-primary btn-block"
            > 
                Upload Files
            </button>
            </div>
           

            <button
                className="btn btn-send"
            > 
                Send Files
            </button>
        </form>
            

        </>
    )
}
