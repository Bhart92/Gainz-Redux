import React from 'react';

const HelpPage = () => (
    <div className='container'>
        <h1 className='help--h1'>Heres how this works:</h1>
        <section className='help'>  
            <div className='help--list-container'>
                <ol>
                    <li>Click the dropdown box to select desired muscle group and click the GENERATE WORKOUTS button.</li>
                    <li>Click the Add button to keep an exercise. You can select up to three workouts before needing to save them to your workout list.</li>
                    <li>* * * * * <br />If you select a new muscle group from the dropdown box to generate new workouts, or click the My Workouts link before SAVING WORKOUTS your list will not save, or update <br />* * * * *</li>
                    <li>Click the SAVE WORKOUTS button to add the selected workouts to your saved list. Workouts can be added in groups of three.</li>
                    <li>Select another muscle group from the dropdown box and generate more workouts if you wish, or click on the My Workouts link in the nav-bar to see your list.</li>
                    <li>After creating your workout list the MY WORKOUTS link will provide your saved list with links to tutorials for each exercise.</li>
                    <li>Tap on a workout to mark it completed.</li>
                    <li>Click the RESET button to start over.</li>
                    <li>Create your workout list at home, or on the go. Open it up when it is time to sweat and make your routines different everytime.</li>
                </ol>
            </div>
        </section>
    </div>
);

export default HelpPage;