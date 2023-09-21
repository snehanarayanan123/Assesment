import './sidebar.css'
import Saraslogo from '../../assets/Saraslogo.png'
import DashboardSvg from '../../assets/icons/Dashboard.svg'
import BranchesSvg from '../../assets/icons/Branches.svg'
import EmployeesSvg from '../../assets/icons/Employees.svg'
import SettingsSvg from '../../assets/icons/Settings.svg'
function Sidebar(){
    return <div className="sidebar">
        <img src={Saraslogo} alt="SarasLogo" />
        <button className="active">
            <img src={DashboardSvg} alt="Dashboard" />
            Dashboard
        </button>
        <button>
            <img src={BranchesSvg} alt="Branches" />
            School Branches
        </button>
        <button>
            <img src={EmployeesSvg} alt="Employees" />
            Employees
            <select></select>
        </button>
        <button>
            <img src={SettingsSvg} alt="Settings" />
            Settings
        </button>
    </div>
}

export default Sidebar