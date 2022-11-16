import { BenefitsInfo } from "./BenefitsInfo"

export const PreparationsInfo = () => {
  return (
    <>
        <div className="row mt-5 mb-2">
            <div className="col-6">
                <div className="center-contain">
                    <img className="img-fluid rounded" src="../../assets/img/doctor/3.jpg" />
                </div>
            </div>
            <div className="col-6">
                <div className="center-contain">
                    <h1>Preparations Before Vaccine</h1>
                    <p className="mt-5">
                        The success of vaccines is strongly influenced by the strength of the body's immune system. Therefore, there are several thing that can be tried to make the COVID-19 vaccine work: 
                    </p>
                    <div className="accordion mt-5" id="preparationsAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i className="fa fa-square-xmark icon-blue"></i><span className="h5 ms-2">Avoid alcoholic bevarages</span>
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#preparationsAccordion">
                            <div className="accordion-body text-muted">
                                Avoid alcoholic bevarages description...
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fa fa-heart-circle-xmark icon-blue"></i><span className="h5 ms-2">Avoid alcoholic bevarages</span>
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#preparationsAccordion">
                            <div className="accordion-body text-muted">
                                Stress has a profound effect on immune work. Moreover, prolonged stress cortisol production and oxidative stress in the body.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            <i className="fa fa-notes-medical icon-blue"></i><span className="h5 ms-2">Eat healthy food</span>
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#preparationsAccordion">
                            <div className="accordion-body text-muted">
                                Eat healthy food description...
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            <i className="fa fa-bed icon-blue"></i><span className="h5 ms-2">Get enough sleep</span>
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#preparationsAccordion">
                            <div className="accordion-body text-muted">
                                Get enough sleep description...
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            <i className="fa fa-dumbbell icon-blue"></i><span className="h5 ms-2">Exercise or physical activity</span>
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#preparationsAccordion">
                            <div className="accordion-body text-muted">
                                Exercise or physical activity description...
                            </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="mt-5">Emergency Contact</h1>
                    <p className="mt-5">
                        Contact one of the contacts bellow if you or your family feel unwell and have similar symptoms such as COVID-19, make sure you also take care of yourself before reporting to us:
                    </p>
                    <div className="card-group mt-5">
                        <div className="card">
                            <div className="card-body">
                            <i className="fa fa-phone-volume fa-2xl icon-blue"></i>
                            <h5 className="card-title mt-3">Call</h5>
                            <p className="card-text">
                                021.123.145.14
                            </p>
                            <button className="btn btn-primary btn-lg btn-block">Call Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                            <i className="fa fa-comment-dots fa-2xl icon-blue"></i>
                            <h5 className="card-title mt-3">Chat</h5>
                            <p className="card-text">
                                021.123.145.14
                            </p>
                            <button className="btn btn-primary btn-lg btn-block">Chat Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                            <i className="fa fa-video fa-2xl icon-blue"></i>
                            <h5 className="card-title mt-3">Video Call</h5>
                            <p className="card-text">
                                021.123.145.14
                            </p>
                            <button className="btn btn-primary btn-lg btn-block">Video Call Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                            <i className="fa fa-envelope fa-2xl icon-blue"></i>
                            <h5 className="card-title mt-3">Message</h5>
                            <p className="card-text">
                                021.123.145.14
                            </p>
                            <button className="btn btn-primary btn-lg btn-block">Message Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
