import './header.css'
import PersonSvg from '../../assets/icons/person.svg'

function Header() {
    return <div className="header">
        <div>
            school
            <input type="text" placeholder="Vadapalani Educational Society" />
            Logged-in as Main Admin
        </div>
        <div>
            <span>
                <img src={PersonSvg} alt="PersonSvg" />
            </span>
            <h4>varun KR</h4>
            <select></select>
        </div>
    </div>
}

export default Header