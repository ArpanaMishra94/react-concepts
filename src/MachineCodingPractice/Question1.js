import React, {useState} from 'react';

const Question1 = () => {

    const [country, setCountry] = useState([
        {name: 'India', isChecked: false},
        {name: 'UK', isChecked: false},
        {name: 'USA', isChecked: false},
    ]);

    const handleCheckbox = (index) => {
        country[index].isChecked = !country[index].isChecked;
        setCountry([...country]);
    }

    const handleDelete = (index) => {
        country.splice(index, 1);
        setCountry([...country]);
    }

    return(
        <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ul>
                {
                    country.map((country, index) => {
                       return (
                        <li>
                            <input type='checkbox' checked={country.isChecked} onClick={() => handleCheckbox(index)}/>
                            <span style={{margin: '0 8px'}}>{country.name}</span>
                            {country.isChecked ? <span style={{cursor: 'pointer'}} onClick={() => handleDelete(index)}>delete</span> : ''}
                        </li>
                       )
                    })
                }
            </ul>
        </div>
    )
}

export default Question1;