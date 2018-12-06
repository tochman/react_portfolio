import React, { Component } from "react"
import axios from "axios"

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/projects.json')
            .then(response => {
                this.setState({
                    projects: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const projects = this.state.projects
        let projectsList

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    // wrapper

                    <div key={project.id} className="m-2 leading-normal flex">
                        {/* card content */}

                        <div className="max-w-lg w-full border rounded overflow-hidden m-4 sm:flex">
                            {/* card image */}

                            <div
                                className="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center text-center overflow-hidden"
                                style={{ backgroundImage: `url('${project.image}')` }}>
                            </div>
                            <div className="px-6 py-4">
                                <h2 className="mb-2 font-black">{project.name}</h2>
                                <p className="mb-4 text-grey-dark text-sm">
                                    {project.description}
                                </p>

                                {/* button */}
                                <button className="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded-full mt-1 mb-2">
                                    Details
                                </button>

                            </div>

                        </div>
                    </div>
                )
            })
        }


        return (
            <div>
                <h1 className="content-text">My Projects</h1>
                {projectsList}
            </div >
        )
    }
};

export default Projects

