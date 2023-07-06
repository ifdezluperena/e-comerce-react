import {FC} from "react"
import Zoe_main from '../assets/img/Zoe_OriginalSkin.webp'


export const HomePage:FC = () =>{

    return(
        <>
            <div className="div-home">
                <img src = {Zoe_main} className="zoe-main-img" alt = "Champion Zoe"></img>
                <h3>Description Champ</h3>
                <p>As the embodiment of mischief, imagination, and change, Zoe acts as the cosmic messenger of Targon, heralding major events that reshape worlds. Her mere presence warps the arcane mathematics governing realities, sometimes causing cataclysms without conscious effort or malice.</p>
                <h2>Abilities</h2>
                <p>
                Passive: MORE SPARKLES!Zoe's next basic attack after casting a spell deals bonus magic damage.
                <br/>
                <br/>
                Q: PADDLE STAR!Zoe fires a missile that she can redirect in flight. Deals more damage the longer it flies in a straight line.
                <br/>
                <br/>
                W: SPELL THIEF!Zoe can pick up the remnants of enemy summoner spell and active item casts and cast them once herself. Whenever she casts a summoner spell, she gains 3 missiles that fire at the nearest target.
                <br/>
                <br/>
                E: SLEEPY TROUBLE BUBBLE! Causes the target to become drowsy, then fall asleep. While asleep, the target's Magic Resist is reduced. The first source of damage that breaks the sleep is doubled, up to a cap.
                <br/>
                <br/>
                R: PORTAL JUMP Blink! to a nearby position for 1 second. Then blink back.
                </p>

            </div>
                
        </>

    )
}