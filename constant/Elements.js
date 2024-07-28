import Authentication_1 from '../Elements/Authentication/_components/Authentication_1';
import Authentication_2 from '../Elements/Authentication/_components/Authentication_2';
import Authentication_3 from '../Elements/Authentication/_components/Authentication_3';
import Authentication_4 from '../Elements/Authentication/_components/Authentication_4';
import Authentication_5 from '../Elements/Authentication/_components/Authentication_5';
import Dashboard_1 from '../Elements/Dashboard/Dashboard_1/Dashboard_1';
import Faq_1 from '../Elements/FAQ/Faq_1';
import Faq_2 from '../Elements/FAQ/Faq_2';
import { Authentication_01, Authentication_02 } from '../utils/ElementsCodeStrings/AuthenticationCodeString';

export const AuthenticationElementsData = [
    {
        component: <Authentication_1 />,
        name: "authentication-1",
        code: Authentication_01
    },
    {
        component: <Authentication_2 />,
        name: "authentication-2",
        code: Authentication_02
    },
    {
        component: <Authentication_3 />,
        name: "authentication-3",
        code: ''
    },
    {
        component: <Authentication_4 />,
        name: "authentication-4",
        code: ''
    },
    {
        component: <Authentication_5 />,
        name: "authentication-5",
        code: ''
    },
]

export const DashboardElementsData = [
    {
        component: <Dashboard_1 />,
        name: "dashboard-1",
        code: ''
    },
]

export const FaqElementsData = [
    {
        component: <Faq_1 />,
        name: "FAQ-1",
        code: ''
    },
    {
        component: <Faq_2 />,
        name: "FAQ-2",
        code: ''
    },
]