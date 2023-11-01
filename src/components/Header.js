import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faMicrophone, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function Header () {
    return (

<div>
<Link  to ="/"><FontAwesomeIcon icon={faArrowLeft}/></Link>

<div>
    <FontAwesomeIcon icon = {faMicrophone} />
    <FontAwesomeIcon icon = {faCog} />
</div>
</div>
    )
}

export default Header;