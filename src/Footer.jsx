import React from "react"
const scrollToTop = () => {
    // window.scrollTo(0, 0)
    let mainSection = document.getElementById('main-section')
    mainSection.scrollTop = 0
    document.documentElement.scrollTop = 0

}

const Footer = () => {
    return (
        <div className="border-t px-8 py-4">
            <div className="flex justify-center text-grey">
                Made with React
                <button onClick={() => scrollToTop()}>Scroll</button>

            </div>

        </div>
    )
}

export default Footer