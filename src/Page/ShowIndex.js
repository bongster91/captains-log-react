import LogDetail from "../components/LogDetail";
import { Link } from 'react-router-dom';

function ShowIndex({ logs, deleteLog }) {

    return (
        <div>
            <LogDetail logs={logs} deleteLog={deleteLog}/>
            <button>
                <Link to="/logs">back</Link>
            </button>
        </div>
    );
};

export default ShowIndex;
