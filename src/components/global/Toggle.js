
function Toggle({ darkMode, setDarkMode }) {
    return (
        <div className='dark-mode-toggle absolute p-6 right-0 inline-block align-middle md:order-3'>
            <input
            className="dm-input"
            id='switch'
            type="checkbox"
            role='switch'
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            />
            <label className='dm-label' htmlFor="switch">Toggle</label>
            {/* <SunIcon className='is_checked h-5 w-5' />
            <MoonIcon className='is_unchecked h-5 w-5' /> */}
        </div>
    )
}

export default Toggle