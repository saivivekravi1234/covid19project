import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { countries } from '../../API'
import { useState, useEffect } from 'react'
import styles from './CountryPicker.module.css'
function CountryPicker({handleCountryChange}) {
    const [fetchCountries, setFetchCountries] = useState([])
    useEffect(() => {
        const country = async () => {
            const data = await countries();
            setFetchCountries(data)

        }
        country();

    }, [setFetchCountries])
    console.log("in country")
    console.log(fetchCountries)
    return (
        <div>
            <FormControl className={styles.formcontrol}>

                <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>

                    <option value="">Global</option>
                    {fetchCountries.map((country, index) => { return (<option key={index} value={country}>{country}</option>) })}

                </NativeSelect>

            </FormControl>
        </div>
    )
}

export default CountryPicker
