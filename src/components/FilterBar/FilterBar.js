import React from 'react';
import './style.css';

function FilterBar({ handleFirstNameSort, handleLastNameSort, handleCountrySort, handleInputChange, search }) {
	return (
		<div className="filter-wrapper">
			<div className="filter">
				<h3>Sort By</h3>
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value="name" onClick={handleFirstNameSort} />
					<label className="form-check-label">First Name</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value="name" onClick={handleLastNameSort} />
					<label className="form-check-label">Last Name</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value="country" onClick={handleCountrySort} />
					<label className="form-check-label">Country</label>
				</div>
				<form className="pure-form">
					<fieldset>
						<input type="name" placeholder="name" value={search} onChange={handleInputChange} />
					</fieldset>
				</form>
			</div>
		</div>
	);
}

export default FilterBar;
