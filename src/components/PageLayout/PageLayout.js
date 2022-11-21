import { Outlet, Navigate } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const PageLayout = ({ user, onLogout }) => {
    if (!user) {
        return <Navigate to="/register" />;
    }

    return (
        <div>
            <Navigation onLogout={onLogout} />

            <Outlet />
        </div>
    );
};