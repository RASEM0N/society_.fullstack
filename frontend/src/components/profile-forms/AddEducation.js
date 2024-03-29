import React, { useState } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom';

const initialState = {
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
};

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState(initialState);

    const [toDataDisabled, toggleDisabled] = useState(false);

    const {
        school,
        degree,
        from,
        to,
        current,
        description,
        fieldofstudy,
    } = formData;
    console.log(current);
    const onChange = (event) => {
        console.log(`[${event.target.name}]: ${event.target.value}`);
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <section className="container">
            <h1 className="large text-primary">Add Your Education</h1>
            <p className="lead">
                <i className="fas fa-graduation-cap"></i> Add any school,
                bootcamp, etc that you have attended
            </p>
            <small>* = required field</small>
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    addEducation(formData, history);
                }}
            >
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* School or Bootcamp"
                        name="school"
                        value={school}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Degree or Certificate"
                        name="degree"
                        value={degree}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Field Of Study"
                        name="fieldofstudy"
                        value={fieldofstudy}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input
                        type="date"
                        name="from"
                        value={from}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <p>
                        <input
                            type="checkbox"
                            name="current"
                            checked={current}
                            value={current}
                            onChange={(e) => {
                                setFormData({ ...formData, current: !current });
                                toggleDisabled(!toDataDisabled);
                            }}
                        />{' '}
                        Current School or Bootcamp
                    </p>
                </div>
                <div className="form-group">
                    <h4>To Date</h4>
                    <input
                        type="date"
                        name="to"
                        value={to}
                        onChange={(e) => onChange(e)}
                        disabled={toDataDisabled}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Program Description"
                        value={description}
                        onChange={(e) => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">
                    Go Back
                </Link>
            </form>
        </section>
    );
};

const mapStateToProps = (state) => ({});

// AddEducation.propTypes = {};

export default connect(mapStateToProps, {
    addEducation,
})(withRouter(AddEducation));
