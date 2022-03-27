import React from 'react';

const Winners = () => {
    return (
        <div className={'box_one'}>
            <div className={'box_two'}>
                <h1>Winners</h1>
                <table>
                    <thead>
                    <tr>
                        <th><h4>Nickname</h4></th>
                        <th><h4>Points</h4></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Egor</td>
                        <td>122</td>
                    </tr>
                    <tr>
                        <td>Alex</td>
                        <td>30</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Winners;