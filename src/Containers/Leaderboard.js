import '../App.scss';
import data from './data.js';

function header() {
    return (
        <div>
            <div className='header-container'>
                <h4>User leaderboard</h4>
            </div>
            <div className='leaderboard-sub-header'>
                <label>Email</label>
                <label className='Friends'>Friends invited</label>
                <label>Country</label>
            </div>
        </div>
    )
}

function leaderboardData() {
    return data
        .slice(0, 5)
        .sort((a, b) => b.sign_ups - a.sign_ups)
        .map(({ email, country, sign_ups }, index) => {
            return (
                <div key={index}>

                    <div className='data'>
                        <label className='email'>{email}</label>
                        <label className='country'>{country}</label>
                        <label className='number'>{sign_ups.toLocaleString('en-US')}</label>
                    </div>
                </div>
            )
        })
}

function footer() {
    return (
        <div>
            <button className='button'>See all countries</button>
        </div>
    )
}

function Leaderboard() {
    return (
        <div className='leaderboard minor-grid-item'>
            <div className='container'>
                {header()}
                {leaderboardData()}
                {footer()}
            </div>
        </div>
    );
}

export default Leaderboard;
