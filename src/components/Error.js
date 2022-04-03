import React from 'react'
import {  Link } from "react-router-dom"

export const Error = () => {
  return (
    <div className="container py-10">
        <div className="row">
            <div className="col-md-12">
                <div className="error-template">
                    <h3 className="font-bold text-4xl">Ops!</h3>
                    <h2 className="font-bold text-3xl">Error 404 Not Found</h2>
                    <div className="error-details">
                        Sorry, an error occurred. The requested page was not  found!
                    </div>
                    <div className="error-actions">
                        <Link to="/" className="btn btn-outline-primary btn-lg ">
                            <ion-list>
                                <ion-item>
                                    <ion-icon name="home" item-end></ion-icon>
                                        &nbsp;Back To Home Page
                                    {/* <ion-icon name="rose" item-end></ion-icon> */}
                                </ion-item>
                            </ion-list>
                        </Link>
                        <Link to="/contact-us" className="btn btn-outline-secondary btn-lg">
                            <ion-icon name="notifications"/>&nbsp;Support
                        </Link>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}
