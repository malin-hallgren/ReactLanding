import './ThemeSwitch.css'

export default function ThemeSwitch({ theme, setTheme }) {

    return (
        <button id="theme-switch" title="Switch Theme" className={'theme-button ' + (theme === 'dark' ? 'dark' : 'light')} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            
        </button>
    );
}