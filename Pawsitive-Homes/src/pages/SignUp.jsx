import { Text } from '@mantine/core';
import PageContainer from '../components/PageContainer';

function SignUp() {
    return (
        <PageContainer>
            <div>
                <Text
                    size='xl'
                    fw={900}
                    variant='gradient'
                    align='center'
                    gradient={{ from: '#006eb4ff', to: '#1E2761', deg: 90 }}
                >
                    Sign up
                </Text>
            </div>
        </PageContainer>
    );
}

export default SignUp;
