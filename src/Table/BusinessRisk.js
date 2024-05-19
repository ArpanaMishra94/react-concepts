import React, { useState } from 'react'

const INITIAL_STATE = {
    language: false,
    section: '',
    businessPlan: '',
    mitigationPlan: '',
    clientRejected: false,
};

const BusinessRisk = () => {
    const [table, setTable] = useState([INITIAL_STATE]);

    const handleAddRow = () => {
        setTable((prev) => [...prev, INITIAL_STATE]);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="checkbox-row">Contract language</th>
                        <th className="section-row">Section</th>
                        <th className="para-row">Business Risk</th>
                        <th className="para-row">Mitigation Plan</th>
                        <th className="checkbox-row">Client Rejected</th>
                        <th className="checkbox-row" />
                    </tr>
                </thead>
                <tbody>
                    {
                        
                    }
                </tbody>
            </table>
            <div>
                <button onClick={handleAddRow}>Add Row</button>
            </div>
        </div>
    )
}

export default BusinessRisk;