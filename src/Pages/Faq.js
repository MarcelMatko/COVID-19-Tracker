import React from 'react';
import '../App.css';

function Faq() {
    return (
        <div className="container-fluid mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-4 shadow-box">
                    <h3 className="text-weight">About this data</h3>
                    <div className="first">
                        <div>It changes rapidly</div>
                        <p className="text-secondary">This data changes rapidly and might not reflect some cases still being reported.</p>
                    </div>
                    <div className="second">
                        <div>It only includes people tested</div>
                        <p className="text-secondary">Cases only include people who were tested and confirmed positive. Testing rules and availability vary by country. Some areas may not have data because they haven’t published their data or haven’t done so recently.</p>
                    </div>
                    <div className="third">
                        <div>Why do I see different data from different sources?</div>
                        <p className="text-secondary">There are various sources that are tracking and aggregating coronavirus data. They update at different times and may have different ways of gathering data.</p>
                    </div>
                    <div className="api">
                        <p className="small text-muted">Using API by <a href="https://github.com/disease-sh/API" className="text-danger">disease-sh</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;