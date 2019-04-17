import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { UndrawDashboard } from 'react-undraw-illustrations';

class Projects extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        this.readProjects()
    }

    readProjects() {
        axios.get('./src/data/projects.json')
            .then(response => {
                this.setState({
                    projects: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const projects = this.state.projects
        let projectsList

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <ProjectCard project={project} />
                    </div>
                )
            })
        }


        return (
            <div className="container content-wrapper md:px-12">
                <div className="flex mb-4">
                    <div className="w-1/4">
                        <UndrawDashboard primaryColor='#12283a' height='200px' />
                    </div>
                    <div className="w-3/4">
                        <h1>My Projects</h1>
                        <p>This is a selection of some of my projects I've been working on.</p>
                    </div>

                </div>

                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {projectsList}
                </div>
            </div>
        )
    }
};

export default Projects

