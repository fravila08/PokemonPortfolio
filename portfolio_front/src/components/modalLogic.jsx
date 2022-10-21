import AddedAPokemon from '../modals/addedAPokemonModal';
import ReleaseModal from '../modals/releaseModal';
import NeedToRelease from '../modals/tooManyModal';
import BoulderBadge from '../modals/boulderModal';
import CascadeBadge from '../modals/cascadeModal';
import ThunderBadge from '../modals/thunderModal';
import RainbowBadge from '../modals/rainbowModal';
import SoulBadge from '../modals/soulModal';
import MarshBadge from '../modals/marshModal';
import VolcanoBadge from '../modals/volcanoModal';
import EarthBadge from '../modals/earthModal';

const ModalLogic= ({
    user,
    modalShow, setModalShow, releaseShow, setReleaseShow,
    needRelease, setNeedRelease, showBoulder, setShowBoulder,
    showCascade, setShowCascade, showThunder, setShowThunder,
    showRainbow, setShowRainbow, showSoul, setShowSoul,
    showMarsh, setShowMarsh, showVolcano, setShowVolcano,
    showEarth, setShowEarth
})=>{

    return(
        <div>
            <AddedAPokemon
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            <ReleaseModal
            user={user}
            show={releaseShow}
            onHide={() => {
            setReleaseShow(false)
            window.location.reload()
            }}
            />
            <NeedToRelease
            user={user}
            show={needRelease}
            onHide={() => setNeedRelease(false)}
            />
            <BoulderBadge 
            show={showBoulder}
            onHide={()=>{setShowBoulder(false)}}
            />
            <CascadeBadge 
            show={showCascade}
            onHide={()=>{setShowCascade(false)}}
            />
            <ThunderBadge 
            show = {showThunder}
            onHide={()=>{setShowThunder(false)}}
            />
            <RainbowBadge 
            show={showRainbow}
            onHide= {()=>{setShowRainbow(false)}}
            />
            <SoulBadge 
            show={showSoul}
            onHide={()=>{setShowSoul(false)}}
            />
            <MarshBadge 
            show={showMarsh}
            onHide={()=>{setShowMarsh(false)}}
            />
            <VolcanoBadge 
            show={showVolcano}
            onHide={()=>{setShowVolcano(false)}}
            />
            <EarthBadge 
            show={showEarth}
            onHide={()=>{setShowEarth(false)}}
            />
        </div>
    )
}

export default ModalLogic;