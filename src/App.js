import React, { useState, useEffect } from 'react';
import API from './utils/API';
import Wrapper from './components/Wrapper/Wrapper';
import Title from './components/Title/Title';
import FilterBar from './components/FilterBar/FilterBar';
import Card from './components/Card/Card';

function App() {
	//useState to set state
	const [ employeeState, setEmployeeState ] = useState([]);

	//useEffect to make api call on page load
	useEffect(() => {
		API.search().then((response) => {
			setEmployeeState(response.data.results);
		});
	}, []);

	useEffect(
		() => {
			console.log('Employee State Changed');
		},
		[ employeeState ]
	);

	// sort by first name function to send as props to filterbar component
	const handleFirstNameSort = () => {
		setEmployeeState(
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
		setEmployeeState(
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
		setEmployeeState(
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

	return (
		<Wrapper>
			<Title />
			<FilterBar
				handleFirstNameSort={handleFirstNameSort}
				handleLastNameSort={handleLastNameSort}
				handleCountrySort={handleCountrySort}
			/>
			{employeeState.map((c) => (
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
