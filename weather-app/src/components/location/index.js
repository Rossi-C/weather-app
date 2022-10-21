

function EditLocation({ city, setCity, country, setCountry }) {
    return (
        <form>
            <label>
                City:
                <input
                    className='Input'
                    type='text'
                    name='city'
                    value={city}
                    onChange={e => setCity(e.target.value)} />
            </label>
            <label>
                Country:
                <input
                    className='Input'
                    type='text'
                    name='country'
                    value={country}
                    onChange={e => setCountry(e.target.value)} />
            </label>
        </form>
    );
}

export default EditLocation;