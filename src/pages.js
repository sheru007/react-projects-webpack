import CheckBox from "./component/CheckBox";
import MultiSelectInput from "./component/MultiSelectInput";
import SelectableGrid from "./component/SelectableGrid";
import ShowJobs from "./component/ShowJobs";
import StepBarApp from "./component/StepBarApp";
import Counter from "./Counter";
import Home from "./Home";
import Testing from "./Testing";

const PAGES = [
    {
        name: 'Home',
        path: '/home',
        component: Home
    },
    {
        name: 'Testing',
        path: '/testing',
        component: Testing
    },
    {
        name: 'Counter',
        path: '/counter',
        component: Counter
    },
    {
        name: 'Step Bar',
        path: '/step-bar',
        component: StepBarApp
    },
    {
        name: 'Show Jobs List',
        path: '/show-jobs-list',
        component: ShowJobs
    },
    {
        name: 'Checkbox',
        path: '/checkbox',
        component: CheckBox
    },
    {
        name: 'Selectable Grid',
        path: '/selectable-grid',
        component: SelectableGrid
    },
    {
        name: 'Multi Select Input',
        path: '/multi-select-input',
        component: MultiSelectInput
    },
]

export default PAGES;