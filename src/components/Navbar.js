import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"

function Navbar(){
    return (    
        <div>
            <Link to='/'>
                <Button>
                    Home
                </Button>
            </Link>
            {'      '}
            <Link to='/search'>
                <Button>
                    Search For a Player
                </Button>
            </Link>
            {'      '}
            <Link to='/new'>
                <Button>
                    Report a Player
                </Button>
            </Link>
        </div>
    )
}

export default Navbar

