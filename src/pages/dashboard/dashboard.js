import { useEffect, useState } from 'react'
import './dashboard.css'
import axios from 'axios'
import Sidebar from "../../components/sidebar/sidebar"
import Header from '../../components/header/header'
import GroupSvg from '../../assets/icons/Group.svg'

function Dashboard() {

    const [fields, setFields] = useState(null)

    useEffect(() => {
        axios.get('https://api-mock.appsaras-dev.sarasapp.com/dashboard/school-admin-main/1').then(res => {
            console.log(res.data.dashboard);
            setFields(res.data.dashboard)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return <div className="dashboard">
        <Sidebar />
        <div className="dashboardContainer">
            <Header />
            {fields && <div className="fieldsContainer">
                <div>
                    <span className="imageContainer">
                        <img src={GroupSvg} alt="Group" />
                    </span>
                    <div>
                        <span className='title'>
                            Branches
                        </span>
                        <span className='value'>{fields.totalBranches}</span>
                    </div>
                </div>
                <div>
                    <span className="imageContainer">
                        <img src={GroupSvg} alt="Group" />
                    </span>
                    <div>
                        <span className='title'>
                            Classes
                        </span>
                        <span className='value'>{fields.totalClasses}</span>
                    </div>
                </div>
                <div>
                    <span className="imageContainer">
                        <img src={GroupSvg} alt="Group" />
                    </span>
                    <div>
                        <span className='title'>
                            Sections
                        </span>
                        <span className='value'>{fields.totalSections}</span>
                    </div>
                </div>
                <div>
                    <span className="imageContainer">
                        <img src={GroupSvg} alt="Group" />
                    </span>
                    <div>
                        <span className='title'>
                            Students Present
                        </span>
                        <div className='presentContainer'>
                            <span className='value'>{fields.studentsPresent}</span><span className='totalVal'>/{fields.totalStudents}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="imageContainer">
                        <img src={GroupSvg} alt="Group" />
                    </span>
                    <div>
                        <span className='title'>
                            Main Admins
                        </span>
                        <span className='value'>{fields.totalMainAdmins}</span>
                    </div>
                </div>
                <div>
                    <span className="imageContainer">
                        <img src={GroupSvg} alt="Group" />
                    </span>
                    <div>
                        <span className='title'>
                            Branch Admins
                        </span>
                        <span className='value'>{fields.totalBranchAdmins}</span>
                    </div>
                </div>
                <div>
                    <span className="imageContainer">
                        <img src={GroupSvg} alt="Group" />
                    </span>
                    <div>
                        <span className='title'>
                            Teachers
                        </span>
                        <span className='value'>{fields.totalTeachers}</span>
                    </div>
                </div>
                <div>
                    <span className="imageContainer">
                        <img src={GroupSvg} alt="Group" />
                    </span>
                    <div>
                        <span className='title'>
                            Other Employees
                        </span>
                        <span className='value'>{fields.totalEmployees}</span>
                    </div>
                </div>
            </div>}
            <div className="bottomContainer">

            </div>
        </div>
    </div>
}

export default Dashboard