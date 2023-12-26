import { Text } from '@mantine/core';
import PageContainer from '../components/PageContainer';

function LogIn() {
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
                    Log in
                </Text>
            </div>
        </PageContainer>
    );
}

export default LogIn;
