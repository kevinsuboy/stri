import React from 'react';

export default ({ duration, distance, handleChange, activity=false }) => {
    let { hours: h, minutes: m, seconds: s } = duration;
    h = h ? h : "0";
    m = m ? m : "0";
    s = s ? s : "0";
    return (
        <div className="r1">
            <label>Distance
        <div className="dist-input-group">
                    <div className="dist-input">
                        {activity ? <input
                            type="text"
                            className="filter-input session-input"
                            value={distance !== "" ? Math.round(distance*100)/100:null}
                            onChange={handleChange("distance")}
                        /> : null}
                    </div>{activity ? null : <p>{distance !== "" ? Math.round(distance * 100) / 100 : "0"} mi</p>}
                </div>
            </label>
            <div className="dur-group">
                <label>Duration
        <div className="dur-input-group">
                        {activity ? <div className="dur-input">
                            <input
                                type="text"
                                className="filter-input session-input"
                                value={parseInt(parseInt(h.split("h")[0]))}
                                onChange={handleChange("hours")}
                            />
                        </div> : null}
                        {activity ? null : <p>{parseInt(parseInt(h.split("h")[0]))}h</p>}
                        {activity ? <div className="dur-input">
                            <input
                                type="text"
                                className="filter-input session-input"
                                value={parseInt(parseInt(m.split("m")[0]))}
                                onChange={handleChange("minutes")}
                            />
                        </div> : null}
                        {activity ? null : <p>{parseInt(parseInt(m.split("m")[0]))}m</p>}
                        {activity ? <div className="dur-input">
                            <input
                                type="text"
                                className="filter-input session-input"
                                value={parseInt(parseInt(s.split("s")[0]))}
                                onChange={handleChange("seconds")}
                            />
                        </div> : null}
                        {activity ? null : <p>{parseInt(parseInt(s.split("s")[0]))}s</p>}
                    </div>
                </label>
            </div>
        </div>
    )
}