import React from 'react';
import Tooltip from '../partials/Tips';
import { Col, ToggleButton } from 'react-bootstrap';

function Saved() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(" https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.data.memes);
                    console.log(res.data.memes);
                    console.log(items);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <Col className="mid-section">
                <Tooltip />
                <div className="memeScroller">
                    {items.map(item => (
                        <div key={item.id}>
                            <Link>
                                <img className='memeDisplay' alt={item.name} src={item.url} />
                            </Link>
                            <h6 className='memeTitle'>{item.name}</h6>
                        </div>
                    ))}
                    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                        <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
                        <ToggleButton value={2}>Checkbox 2</ToggleButton>
                        <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Col>
        );
    };

    export default Saved;