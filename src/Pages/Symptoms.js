import React from 'react';
import '../App.css';

function Symptoms() {
    return (
        <div className="container-fluid mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-4 shadow-box">
                    <h3 className="text-weight">Symptoms</h3>
                    <div className="first">
                        <div>Most common symptoms</div>
                        <ul>
                            <li>fever</li>
                            <li>dry cough</li>
                            <li>tiredness</li>
                        </ul>
                        <p></p>
                    </div>
                    <div className="second">
                        <div>Less common symptoms</div>
                        <ul>
                            <li>aches and pains</li>
                            <li>sore throat</li>
                            <li>diarrhoea</li>
                            <li>conjunctivitis</li>
                            <li>headache</li>
                            <li>loss of taste or smell</li>
                            <li>a rash on skin, or discolouration of fingers or toes</li>
                        </ul>
                        <p></p>
                    </div>
                    <div className="third">
                        <div>Serious symptoms</div>
                        <ul>
                            <li>difficulty breathing or shortness of breath</li>
                            <li>chest pain or pressure</li>
                            <li>loss of speech or movement</li>
                        </ul>
                    </div>
                    <div className="alert text-danger">
                        * Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility. *
                </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-auto">
                            <img className="img-responsive" alt="Fever" src="https://www.gstatic.com/healthricherkp/covidsymptoms/light_fever.gif" height="55px" width="55px" />
                            <p >&nbsp;&nbsp;&nbsp;&nbsp;Fever</p>
                        </div>
                        <div className="col-auto">
                            <img className="img-responsive" alt="Dry cough" src="https://www.gstatic.com/healthricherkp/covidsymptoms/light_cough.gif" height="55px" width="55px" />
                            <p >Dry cough</p>
                        </div>
                        <div className="col-auto">
                            <img className="img-responsive" alt="Tiredness" src="https://www.gstatic.com/healthricherkp/covidsymptoms/light_tiredness.gif" height="55px" width="55px" />
                            <p >Tiredness</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Symptoms;