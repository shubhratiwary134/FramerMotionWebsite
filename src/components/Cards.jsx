import '../cssForComponents/cards.css'
import {motion} from 'framer-motion'
export function Cards(){
    return(
    <>
        <div className="Cards-container">
           
            <div className="cards-Wrapper">
                <Card heading1="Capital" heading2="Management" description='loremA graphic representation of data abstracted from the banks of every computer in the tunnel’s ceiling. The alarm still oscillated,
'/>
                <Card heading1='Initial' heading2='Investment' description='loremThe knives seemed to have been sparsely decorated, years before, with a luminous digital display wired to a subcutaneous chip. 
'/>
                <Card heading1='Real ' heading2='Estates' description='He woke and found her stretched beside him in the center of his closed left eyelid. Strata of cigarette smoke rose from the tiers, 
'/>
                
            </div>
         
        </div>
    </>
    )
}

function Card({heading1,heading2,description}){

    return(
        <>
            <motion.div
            initial={
                {
                    opacity:0,
                    
                }
            }
            
            whileInView={{
                opacity:1,
               translateX:[-50,0] 
            }}
            viewport={{
              amount:'some'  
            }}
             transition={{
                duration:1
            }}
            
            className="card-wrapper" id='ABOUT US'>
                <div className="heading-card">
                   <p className='Heading-p'> {heading1}<br></br>{heading2}</p>
                    </div>
                <div className="description-card">
                    <p className='description-p-tag'>{description}</p>
                    </div>
                    <div className='button-learnmore-container'>
                        {/* <button className='button-learnmore'>Learn More</button> */}
                        <button className='button type1'>Learn More</button>
                    </div>
            </motion.div>
        </>
    )
}