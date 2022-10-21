

function EditUnits({ units, setUnits }) {
    return (
        <form>
            <label>
                <input
                    className='Input'
                    type='radio'
                    checked={units === 'imperial'}
                    name='imperial'
                    value='imperial'
                    onChange={e => setUnits(e.target.value)} />
                Imperial
            </label>
            <label>
                <input
                    className='Input'
                    type='radio'
                    checked={units === 'metric'}
                    name='metric'
                    value='metric'
                    onChange={e => setUnits(e.target.value)} />
                Metric
            </label>
        </form>
    );
}

export default EditUnits;