import Rightwindow from "./Rightwindow"
import Leftbar from "./Leftbar"
function Mainwindow(){
    return(
        <div className="body">
            <div className="display-window">
            
            <div className="left-bar">
                <Leftbar />

            </div>
            <div className="right-window">
                <Rightwindow />

            </div>
            </div>

        </div>
    )
}
export default Mainwindow