import React, { useState, useEffect } from 'react';
import API from './utils/API';
import Wrapper from './components/Wrapper/Wrapper';
import Title from './components/Title/Title';
import FilterBar from './components/FilterBar/FilterBar';
import Card from './components/Card/Card';

function App() {
	//useState to capture employees from api call
	const [ employeeState, setEmployeeState ] = useState([]);
	//make copy of employee state
	const [ filteredEmployees, setFilteredEmployees ] = useState([]);
	// track search input value
	const [ search, setSearch ] = useState('');

	//useEffect to make api call on page load and set state
	useEffect(() => {
		API.search().then((response) => {
			setEmployeeState(response.data.results);
			setFilteredEmployees(response.data.results);
		});
	}, []);

	// sort by first name function to send as props to filterbar component
	const handleFirstNameSort = () => {
		setFilteredEmployees(
			[ ...employeeState ].sort((a, b) => {
				let nameA = a.name.first.toLowerCase();
				let nameB = b.name.first.toLowerCase();
				if (nameA < nameB) {
					return -1;
				} else if (nameA > nameB) {
					return 1;
				}
				return 0;
			})
		);
	};

	// sort by last name function to send as props to filterbar component
	const handleLastNameSort = () => {
		setFilteredEmployees(
			[ ...employeeState ].sort((a, b) => {
				let nameA = a.name.last.toLowerCase();
				let nameB = b.name.last.toLowerCase();
				if (nameA < nameB) {
					return -1;
				} else if (nameA > nameB) {
					return 1;
				}
				return 0;
			})
		);
	};

	// sort by country function to send as props to filterbar component
	const handleCountrySort = () => {
		setFilteredEmployees(
			[ ...employeeState ].sort((a, b) => {
				let locationA = a.location.country.toLowerCase();
				let locationB = b.location.country.toLowerCase();
				if (locationA < locationB) {
					return -1;
				} else if (locationA > locationB) {
					return 1;
				}
				return 0;
			})
		);
	};

	// update state with users search value
	const handleInputChange = (event) => {
		setSearch(event.target.value);
	};

	// watch for changes to users seach value
	useEffect(
		() => {
			// only call handleUser function if user has entered search input
			handleUserSort();
		},
		[ search ]
	);

	const handleUserSort = () => {
		setFilteredEmployees(
			[ ...employeeState ].filter((employee) => employee.name.first.toLowerCase().includes(search))
		);
	};

	return (
		<Wrapper>
			<Title />
			<FilterBar
				handleFirstNameSort={handleFirstNameSort}
				handleLastNameSort={handleLastNameSort}
				handleCountrySort={handleCountrySort}
				handleInputChange={handleInputChange}
				setEmployeeState={setEmployeeState}
				setSearch={setSearch}
			/>
			{filteredEmployees.map((c) => (
				<Card
					key={c.login.uuid}
					firstName={c.name.first}
					lastName={c.name.last}
					country={c.location.country}
					email={c.email}
					phone={c.phone}
					username={c.login.username}
					img={c.picture.medium}
				/>
			))}
		</Wrapper>
	);
}

export default App;
