import React from 'react'
import Foot from './Foot'

export default function Main() {
  return (
    
    <div className="content-page">
               
                <div className="content">

                    <div className="">
                        <div className="page-header-title">
                            <h4 className="page-title">Basic Tables11</h4>
                        </div>
                    </div>

                    <div className="page-content-wrapper ">

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="m-b-30 m-t-0">Bordered Table</h4>

                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="table-responsive">
                                                        <table className="table table-bordered">
                                                            <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>First Name</th>
                                                                <th>Last Name</th>
                                                                <th>Username</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td rowSpan="2">1</td>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@TwBootstrap</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td>@fat</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td colSpan="2">Larry the Bird</td>
                                                                <td>@twitter</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="m-b-30 m-t-0">Hover Table</h4>
                                            <div className="row">
                                                <div className="col-12">
                                                    <table className="table table-hover">
                                                        <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>First Name</th>
                                                            <th>Last Name</th>
                                                            <th>Username</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td colSpan="2">Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Steve</td>
                                                            <td>Urkel</td>
                                                            <td>@steve</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="m-b-30 m-t-0">Responsive Table</h4>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>First Name</th>
                                                                <th>Last Name</th>
                                                                <th>Username</th>
                                                                <th>Age</th>
                                                                <th>City</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                                <td>20</td>
                                                                <td>Cityname</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td>@fat</td>
                                                                <td>20</td>
                                                                <td>Cityname</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Larry</td>
                                                                <td>the Bird</td>
                                                                <td>@twitter</td>
                                                                <td>20</td>
                                                                <td>Cityname</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>Steve</td>
                                                                <td>Mac Queen</td>
                                                                <td>@steve</td>
                                                                <td>20</td>
                                                                <td>Cityname</td>
                                                            </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="m-b-30 m-t-0">Contextual Table</h4>
                                            <div className="row">
                                                <div className="col-12">
                                                    <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Column heading</th>
                                                            <th>Column heading</th>
                                                            <th>Column heading</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr className="table-active">
                                                            <td>1</td>
                                                            <td>Column content</td>
                                                            <td>Column content</td>
                                                            <td>Column content</td>
                                                        </tr>
                                                        <tr className="bg-success text-white">
                                                            <td>3</td>
                                                            <td>Column content</td>
                                                            <td>Column content</td>
                                                            <td>Column content</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Column content</td>
                                                            <td>Column content</td>
                                                            <td>Column content</td>
                                                        </tr>
                                                        <tr className="bg-danger text-white">
                                                            <td>9</td>
                                                            <td>Column content</td>
                                                            <td>Column content</td>
                                                            <td>Column content</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="m-b-30 m-t-0">Striped rows Table</h4>
                                            <div className="row">
                                                <div className="col-12">
                                                    <table className="table table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>First Name</th>
                                                            <th>Last Name</th>
                                                            <th>Username</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Larry</td>
                                                            <td>the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Steve</td>
                                                            <td>Mac Queen</td>
                                                            <td>@steve</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                        </div>

                    </div> 

                </div> 

                
                <Foot  />

            </div>
     </div>       
  )
}
