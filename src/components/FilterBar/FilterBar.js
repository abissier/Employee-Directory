import React from 'react';
import './style.css';

function FilterBar({ handleFirstNameSort, handleLastNameSort, handleCountrySort }) {
	return (
		<div class="filter-wrapper">
			<div class="filter">
				<h3>Sort By</h3>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						id="flexCheckDefault"
						value="name"
						onClick={handleFirstNameSort}
					/>
					<label class="form-check-label" for="flexCheckDefault">
						First Name
					</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						id="flexCheckDefault"
						value="name"
						onClick={handleLastNameSort}
					/>
					<label class="form-check-label" for="flexCheckDefault">
						Last Name
					</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						id="flexCheck2"
						value="country"
						onClick={handleCountrySort}
					/>
					<label class="form-check-label" for="flexCheckChecked">
						Country
					</label>
				</div>
				{/* <h3>Search By</h3>
				<input class="form-control" type="text" placeholder="username" /> */}
			</div>
		</div>
	);
}

export default FilterBar;
