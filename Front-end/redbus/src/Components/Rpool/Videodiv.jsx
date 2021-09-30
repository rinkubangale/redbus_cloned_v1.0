import React from 'react'
import "./Videodiv.css"
export default function Videodiv() {
    return (
        <div className="vid_cont">
            <div className="vid_space">
                <div className="vid_content">
                    <h1>What is rPool?</h1>
                    <p>rPool is an eco-smart option 
                        for handling all your travel 
                        needs by connecting you with
                         fellow professional riders.
                          As our cities are growing,
                           increased traffic adds to
                            the chaos and pollution.
                             Hence, we have committed 
                             to providing a convenient,
                              economical and sustainable
                               solution to this problem 
                               through carpooling and bike
                                pooling.</p>
                </div>
                <div className="vid_embedd"><iframe width="600" height="300" src="https://www.youtube.com/embed/GIZlD2b2bn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


            </div>

            
        </div>
    )
}
