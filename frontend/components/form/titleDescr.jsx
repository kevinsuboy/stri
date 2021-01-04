import React from 'react';

export default ({ title, description, handleChange, activity=true }) => {
    return (
        <div>
        <div className="r3">
            <label>{activity ? "Title" : "Name"}
        <input
                    type="text"
                    className="filter-input session-input"
                    value={title}
                    onChange={handleChange(activity ? "title" : "name")}
                />
            </label>
        </div>
        <div className="r4">
            <label>Description</label>
            <textarea
                className="filter-input session-input descr-input"
                placeholder={activity ? "Optional":null}
                value={description}
                onChange={handleChange("description")}
            />
        </div>
        </div>
   )
}