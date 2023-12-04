import HomeMobile from 'pages/mobile/home'
import HomeDesktop from 'pages/desktop/home'
import AboutDesktop from 'pages/desktop/about'
import AboutMobile from 'pages/mobile/about'
import { useMediaQuery } from 'react-responsive';

function useLayoutSelector(){
    const isMobile = useMediaQuery({maxWidth: 767})

    return {
        home:isMobile ? <HomeMobile /> : <HomeDesktop />,
        about:isMobile ? <AboutMobile /> : <AboutDesktop />,
    }
}

export default useLayoutSelector