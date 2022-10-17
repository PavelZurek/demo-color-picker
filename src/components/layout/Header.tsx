import {FC} from 'react';
import {AppBar, Container, Typography} from '@mui/material';

export const Header: FC = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Typography variant="h3" paddingY={2}>
                    Color picker app
                </Typography>
            </Container>
        </AppBar>
    )
}
