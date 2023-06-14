import useNavigation from "../hooks/use-navigation";

function Link({ to, children }) {
    const { currentPath, navigate } = useNavigation();

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();

        navigate(to);
    };

    // Adjust the behavior of the link if it is the currently selected link
    let classes = '';
    if (to === currentPath) {
        classes = 'selected'
    }

    return <a href={to} onClick={handleClick} className={classes}>{children}</a>
}

export default Link;