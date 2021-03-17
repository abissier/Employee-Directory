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

	// sort by name function to send as props to filterbar component
	const handleNameSort = () => {
		setEmployeeState(employeeState.sort((a, b) => a.name.first > b.name.first));
	};

	// sort by country function to send as props to filterbar component
	const handleCountrySort = () => {
		setEmployeeState(employeeState.sort((a, b) => a.location.country > b.location.country));
	};

	return (
		<Wrapper>
			<Title />
			<FilterBar handleNameSort={handleNameSort} handleCountrySort={handleCountrySort} />
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
