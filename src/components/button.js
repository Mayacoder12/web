import './button.css';

function Button({text, link}) {
    const handleClick = () => {
        // Redirects to the desired website
        window.location.href = {link}; // Replace with your URL
      };
    return(
        <div className='button'>
            <button onClick={handleClick}>{text}</button>
        </div>
    );
}

export default Button;