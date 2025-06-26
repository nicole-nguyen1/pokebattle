import {Button, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <Stack direction="row">
            <Button onClick={() => navigate('select-team')}>Select team</Button>
        </Stack>
    )
}
export default Home
