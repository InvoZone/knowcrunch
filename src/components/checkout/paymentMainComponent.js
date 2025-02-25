import { Container, Grid2 } from "@mui/material";
import CheckoutForm from "./checkoutForm";

const PaymentMainComponent = () => {
    return (
        <Container maxWidth='xl'> {/* Container with max width set to 'xl' */}
            <Grid2
                container
                justifyContent={"center"}
            >
                <Grid2
                    container
                    size={{ xs: 12, lg: 11, xl: 11 }}
                    spacing={6}
                >
                    <CheckoutForm />
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default PaymentMainComponent;