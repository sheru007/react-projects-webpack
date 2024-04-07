import CheckBox from "./component/CheckBox";
import DetectOverlapCircle from "./component/DetectOverlapCircle";
import GreenBoard from "./component/GreenBoard";
import ImageCompareSlider from "./component/ImageCompareSlider";
import ImageZoom from "./component/ImageZoom";
import InfiniteLevelComment from "./component/InfiniteLevelComment";
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
    {
        name: 'Green Board',
        path: '/green-board',
        component: GreenBoard
    },
    {
        name: 'infite level comments',
        path: '/infite-level-comments',
        component: InfiniteLevelComment
    },
    {
        name: 'Image Comparison Slider',
        path: '/image-comparison-slider',
        component: ImageCompareSlider
    },
    {
        name: 'Image Zoom',
        path: '/image-zoom',
        component: ImageZoom
    },
    {
        name: 'Detect Overlap Circle',
        path: '/detect-overlap-circle',
        component: DetectOverlapCircle
    },
]

export default PAGES;