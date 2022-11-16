import { VaccineForm } from "./VaccineForm"

export const IntroInfo = () => {
  return (
    <>
        <div className="row">
            <div className="col-6">
                <div className="center-contain">
                    <h1>Fight Virus With Vaccines</h1>
                    <p className="mt-5">
                        Let's stop this pandemic by killing the virus with a vaccine, don't let yourself and you family get infected.
                    </p>
                    <div className="row mt-5 mb-5">
                        <div className="col-sm-6">
                        <i className="fa fa-circle-check icon-yellow"></i><span className="ms-2">Best Protection</span>
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-star icon-yellow"></i><span className="ms-2">Selected Vaccines</span>
                        </div>
                    </div>
                    <VaccineForm />
                </div>
            </div>
            <div className="col-6">
                <div className="center-contain">
                    <img className="img-fluid rounded" src="../../assets/img/doctor/1.jpg" />
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-sm-3">
                <img className="img-fluid logo-vaccine" src="../../assets/img/vaccines/astrazeneca.png" />
            </div>
            <div className="col-sm-3">
                <img className="img-fluid logo-vaccine" src="../../assets/img/vaccines/sinovac.png" />
            </div>
            <div className="col-sm-3">
                <img className="img-fluid logo-vaccine" src="../../assets/img/vaccines/pfizer.png" />
            </div>
            <div className="col-sm-3">
                <img className="img-fluid logo-vaccine" src="../../assets/img/vaccines/moderna.png" />
            </div>
        </div>
    </>
  )
}
