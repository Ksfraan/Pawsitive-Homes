import { Text } from '@mantine/core';


function AboutPage() {
    return(
        <div>
            <Text
        size="xl"
        fw={900}
        variant="gradient"
        align="center"
        gradient={{ from: '#006eb4ff', to: '#1E2761', deg: 90 }}
        >About us</Text>
        </div>
    )
}

export default AboutPage

