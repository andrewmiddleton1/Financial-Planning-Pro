import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DashboardNewsCard from '../../DashboardNewsCard/DashboardNewsCard';
import { useAppContext } from '../../../store';
import { useLoginCheck } from '../../../utils/setAuthToken';
import Item from './Item';
import "./style.css";

function DashBoard() {
    const [state, appDispatch] = useAppContext();

    useLoginCheck(appDispatch);


    return (
        <div className="flex-container">
            <Sidebar />
            <div>


                <h1>
                    Welcome: {state.user.first_name} {state.user.last_name}
                </h1>
                <div className="flex-container">
                    {/* Nav Item - Dashboard */}



                    <Item active={''} className="flex-item"
                        href={"/clientparticulars"}
                        icon={<i className="fas fa-user-alt" />}
                        text={<span>Client</span>} />





                    {/* Nav Item - Profile */}
                    <Item active={''} className="flex-item"
                        href={"/plannerinfo"}
                        icon={<i className="fas fa-folder-minus" />}
                        text={<span>Planner</span>} />


                </div>


            </div>
        </div>
    );
}

export default DashBoard;
