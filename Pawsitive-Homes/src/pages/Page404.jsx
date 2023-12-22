import { Text } from '@mantine/core';


function Page404() {
    return(
        <div>
            <Text
        size="xl"
        fw={900}
        variant="gradient"
        align="center"
        gradient={{ from: '#006eb4ff', to: '#1E2761', deg: 90 }}
        >404 Page</Text>
        </div>
    )
}

export default Page404