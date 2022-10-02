import {motion} from "framer-motion";
import './app.scss';

let easing = [0.6, -0.05, 0.01, 0.99];
const transition = {duration:1, ease:[0.6, 0.01, -0.05, 0.9]};

const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1,
    }
  }
};

const fadeInUp = {
  initial:{
    opacity:0,
  },
  animate:{
    opacity:1,
    transition:{
      delay:2.5,
      duration:.3
    }
  }
};

const header = {
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easing}
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      delay:.8,
      duration:0.6,
      ease:easing
    }
  }
};

const h3 = {
  initial:{
    top:"-20%",
    opacity:0,
    transition:{duration:0.05, ease:easing}
  },
  animate:{
    top:"50%",
    opacity:.1,
    transition:{
      delay:1.2,
      duration:0.6,
      ease:easing
    }
  }
};

const dots = {
  initial:{
    x:-400
  },
  animate:{
    x:0,
    transition:{
      duration:.2, ...transition
    }
  }
};

const letter = {
  initial:{
    opacity:0,
    x:-400,
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
      duration:1, ...transition
    }
  }
};

const chair ={
  initial:{
    opacity:0,
    x:100
  },
  animate:{
    opacity:1,
    x:0,
    transition:{delay:1.2, duration:.2, ...transition}
  }
};

const search = {
  initial:{
    opacity:0,
    x:100
  },
  animate:{
    opacity:1,
    x:0,
    transition:{delay:1.3, duration:.2, ...transition}
  }
};

const bottom = {
  initial:{
    opacity:0,
    y:160
  },
  animate:{
    opacity:1,
    y:0,
    transition:{delay:1.5, duration:.2, ...transition}
  }
}






function App() {  
  return (
    <motion.div className="container" 
                initial={{opacity:0, height:0}}
                animate={{opacity:1, height:"100vh"}}
                transition= {{duration:1, ease:easing}}
                >
        <motion.div className="wrapper" initial='initial' animate='animate'>
            <motion.div className="pos_abs top_nav" variants={stagger}>
              <motion.span className="logo" variants={header}>DA</motion.span>
              <motion.span variants={header}><i className="fa fa-bars"></i></motion.span>
              <motion.span variants={header}><i className="fa fa-cart-arrow-down"></i></motion.span>
            </motion.div>
            <motion.div className="pos_abs bottom_nav" variants={stagger}>
              <motion.span className="nav_arrow" variants={bottom}>
                <i className="fa fa-chevron-left"></i>
                <i className="fa fa-chevron-right"></i>
              </motion.span>
              <motion.span variants={bottom}><i className="fa fa-facebook"></i></motion.span>
              <motion.span variants={bottom}><i className="fa fa-user-o"></i></motion.span>
            </motion.div>
            <motion.div className="content_left" variants={stagger}>
              <motion.h3 variants={h3}>03</motion.h3>
              <motion.div className="dots" variants={stagger}>
                <motion.span variants={dots}></motion.span>
                <motion.span variants={dots}></motion.span>
                <motion.span className="active" variants={dots}></motion.span>
                <motion.span variants={dots}></motion.span>
                <motion.span variants={dots}></motion.span>
              </motion.div>
              <motion.h2 variants={stagger}>
                <motion.span variants={letter}>PURE</motion.span>
                <motion.span variants={letter}>COTTON</motion.span>
                <motion.span variants={letter}>CHAIR</motion.span>
              </motion.h2>
              <motion.p variants={fadeInUp}>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit.</motion.p>
            </motion.div>
            <motion.div className="image_container" variants={stagger}>
              <motion.img src={process.env.PUBLIC_URL + '/images/chair2.png'} alt="chair" variants={chair}/>
              <motion.div className="search" variants={search}>
                <i className="fa fa-search"></i>
                <span>Search</span>
              </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
  );
}

export default App;


//thanks for watching 
//please like and subscribe my channel
