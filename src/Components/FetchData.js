import React, {useState} from 'react';

function FetchingAPI() {
	const [data, setData] = useState([]);

	const getAPI = () => {
		fetch('http://127.0.0.1:5000/product/1')
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			setData(json);
		});
	};

	return (
		<div>
		API <br/>
		<button onClick={getAPI}>Fetch</button>
		>br/>
		{JSON.stringify(data, null, 2)}
		</div>
		);
}


export default FetchingAPI;







/* //import React from 'react';
// // import axios from 'axios';

// export default class FetchData extends React.Component {
//     state = {
//         persons: [],
//     };

//     componentDidMount() {
//         axios.get('https://jsonpalceholder.typicode.com/users').then(res => {
//             console.log(res);
//             this.setState({ persons: res.data });
//         });
//     }

//     render() {
//         return <ul>
//             {this.state.persons.map(person => <li>{person.name}</li>)}
//         </ul>;
//     }
// }