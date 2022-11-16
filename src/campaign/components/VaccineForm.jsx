export const VaccineForm = () => {

    const onHandlerScheduleVaccine = (e) => {
        e.preventDefault();
        alert('Excellent!');
    }

  return (
    <>
        <i className="fa fa-clock icon-blue"></i><span className="h5 ms-2">Schedule your vaccinations</span>
        <form className="mt-3" onSubmit={ onHandlerScheduleVaccine }>
        <div className="form-group">
            <i className="fa fa-location-dot icon-blue"></i><label htmlFor="locationVaccine" className="ms-2">Location</label>
            <select className="form-control" id="locationVaccine" required>
                <option value="">Select a location</option>
                <option value="1">Jakarta Utara</option>
                <option value="2">Spain</option>
                <option value="3">France</option>
            </select>
        </div>
        <div className="form-group">
            <i className="fa fa-calendar-days icon-blue"></i><label htmlFor="dateVaccine" className="ms-2">Date</label>
            <input type="date" className="form-control" id="dateVaccine" placeholder="dd-mm-yyyy" required />
        </div>
        <div className="form-group">
            <i className="fa fa-syringe icon-blue"></i><label htmlFor="locationVaccine" className="ms-2">Vaccine Type</label>
            <select className="form-control" id="locationVaccine" required>
                <option value="">Select a vaccine</option>
                <option value="1">AstraZeneca</option>
                <option value="2">SINOVAC</option>
                <option value="3">Pfizer</option>
                <option value="3">Moderna</option>
            </select>
        </div>
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
    </>
  )
}
