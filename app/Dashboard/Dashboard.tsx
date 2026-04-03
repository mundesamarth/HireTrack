import MetricsSection from "../components/MetricsSection";
import TopheaderSection from "../components/Topheader";
import TopmetricsSection from "../components/TopmetricsSection";

export default function Dashboard(){
    return(
        <div>
            <TopheaderSection/>
            <TopmetricsSection/>
            <MetricsSection/>
        </div>
    )
}