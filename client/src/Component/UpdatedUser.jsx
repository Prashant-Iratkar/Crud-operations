import axios from 'axios'
import React, { useState } from 'react'

const UpdatedUser = ({value,handleChange,handleSubmit}) => {




  return (
    <>
       <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Update User</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name='name' value={value.name} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Surname</label>
                                    <input type="text" name='surname' value={value.surname} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" name='email' value={value.email} onChange={handleChange} className="form-control" />

                                </div>
                                <div className="form-group">
                                    <label>Phone</label>

                                    <input type="text" name='phone' value={value.phone} onChange={handleChange} className="form-control" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default UpdatedUser