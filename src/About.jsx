import React, { lazy } from "react"
import { UndrawDesignerLife } from 'react-undraw-illustrations';



const About = () => {
    return (
        <div className="container content-wrapper md:px-12">
            <div className="flex flex-wrap mb-4">
                <div className="w-full lg:w-1/4 md:w-1/2">
                    <UndrawDesignerLife primaryColor='#12283a' height='200px' />
                </div>
                <div className="w-full lg:w-3/4 md:w-1/2">
                    <h1 className="content-text">About Me</h1>
                    <p className="content-text">Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
                </div>

            </div>
        </div>
    )
}

export default About