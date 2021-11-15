import React, { useState } from "react";
import { sortBands } from "../../redux/actions";
import { useDispatch } from "react-redux";
import './FormSortAlf.css'

export function FormSortAlf() {

    const dispatch = useDispatch();
    const [sort, setSort] = useState('')

    function handleChange(event) {
        console.log(event.target.value);
        setSort(event.target.value);
        setTimeout(() => {
            dispatch(sortBands(sort));
        }, 200);
    }

    return (
        <div className="form-sort-alf">
            <form>
                <select className='formStyle' name="sort" id="sort" onChange={handleChange}>
                    <option value="">-----------</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
            </form>
        </div>
    )
}