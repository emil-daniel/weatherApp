import React,{useState} from 'react';
import PropTypes from 'prop-types';

const SelectLocation = ({onSelect})=>{
    const [searchValue, setSearchValue]= useState('');

    const onChange = (ev) =>{
        ev.preventDefault();
        setSearchValue(ev.target.value);
    }

    const onSubmit = (ev) =>{
        ev.preventDefault();
        onSelect(searchValue);
    }

    return <div className="align-middle">Select Location
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="City"  onChange={onChange}/>
            <input type="submit" value="Search"/>
        </form>


    </div>   
}

SelectLocation.propTypes = {
    onSelect: PropTypes.func
}

SelectLocation.defaultProps = {
    onSelect: ()=>{}
}

export default SelectLocation;