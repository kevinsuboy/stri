import React from 'react';

export default ({ title, description, handleChange }) => {
    return (
        <div>
        <div className="r3">
            <label>Title
        <input
                    type="text"
                    className="filter-input session-input"
                    value={title}
                    onChange={handleChange("title")}
                />
            </label>
        </div>
        <div className="r4">
            <label>Description</label>
            <textarea
                className="filter-input session-input descr-input"
                value={description}
                onChange={handleChange("description")}
            />
        </div>
        </div>
   )
}