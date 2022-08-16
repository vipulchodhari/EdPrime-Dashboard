import '../styles/user.css';

export const User = () => {
    return <div className='user-container'>
        <h1><u>User Profile</u></h1>
        <div className='user-form-cont'>
            <form className='user-form'>
                <input type='text' placeholder='Enter your name...' /><br/>
                <input type='email' placeholder='Enter your email...' /><br/>
                <input type='password' placeholder='Enter your password...' /><br/>

                <input type='submit' />
            </form>
        </div>

    </div>
}