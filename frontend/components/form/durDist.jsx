import React from 'react';

export default ({ duration, distance, handleChange }) => {
    let { hours: h, minutes: m, seconds: s } = duration;
    h = h ? h : "0";
    m = m ? m : "0";
    s = s ? s : "0";
    return (
        <div className="r1">
            <label>Distance
        <div className="dist-input-group">
                    <div className="dist-input">
                        <input
                            type="text"
                            className="filter-input session-input"
                            value={Math.round(distance*100)/100}
                            onChange={handleChange("distance")}
                        />
                    </div><p>mi</p>
                </div>
            </label>
            <div className="dur-group">
                <label>Duration
        <div className="dur-input-group">
                        <div className="dur-input">
                            <input
                                type="text"
                                className="filter-input session-input"
                                value={parseInt(parseInt(h.split("h")[0]))}
                                onChange={handleChange("hours")}
                            />
                        </div><p>h</p>
                        <div className="dur-input">
                            <input
                                type="text"
                                className="filter-input session-input"
                                value={parseInt(parseInt(m.split("m")[0]))}
                                onChange={handleChange("minutes")}
                            />
                        </div><p>m</p>
                        <div className="dur-input">
                            <input
                                type="text"
                                className="filter-input session-input"
                                value={parseInt(parseInt(s.split("s")[0]))}
                                onChange={handleChange("seconds")}
                            />
                        </div><p>s</p>
                    </div>
                </label>
            </div>
        </div>
    )
}