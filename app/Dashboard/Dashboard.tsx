import KanbanSection from "../components/KanbanSection";
import MetricsSection from "../components/MetricsSection";
import TopheaderSection from "../components/Topheader";
import TopmetricsSection from "../components/TopmetricsSection";

export default function Dashboard(){
    return(
        <div className="">
            <TopheaderSection/>
            <TopmetricsSection/>
            <MetricsSection/>
            <KanbanSection/>
        </div>
    )
}