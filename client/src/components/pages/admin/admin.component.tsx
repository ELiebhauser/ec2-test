import React from 'react';
import './admin.component.css';
import { AllTicketsComponent } from './all/all-tickets.component';
import { RecentTicketsComponent } from './recent/recent-ticket.component';
import { AcceptedTicketsComponent } from './accepted/accepted-tickets.component';


export const AdminComponent: React.FC = () => {
    
    return (
        <div>

            <nav> NavPanel Here</nav>
            
            <main>
                <RecentTicketsComponent />

                <AcceptedTicketsComponent />

                <AllTicketsComponent />
            </main>
        </div>
    );
};