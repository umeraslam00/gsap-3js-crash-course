import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
    // TODO: Implement the gsap.to() method
    //It is similar to useEffect hook.
    useGSAP( () => {
      gsap.to("#blue-box", {
        x: 850, //animation across x-axis.
        //y: 250, //animation across y-axis.
        repeat: -1,  //specificy the number of repeats. -1 for infinite.
        yoyo: true, //make the animation reverse every cycle.
        rotation: 360,
        duration: 2, //make the animation slow or fast.
        ease: 'back.out(1.7)'
      })
    }, [])
  
    return (
      <main>
        <h1>GsapTo</h1>
  
        <p className="mt-5 text-gray-500">
          The <code>gsap.to()</code> method is used to animate elements from their
          current state to a new state.
        </p>
        <p className="mt-5 text-gray-500">
          The <code>gsap.to()</code> method is similar to the{" "}
          <code>gsap.from()</code> method, but the difference is that the{" "}
          <code>gsap.to()</code> method animates elements from their current state
          to a new state, while the <code>gsap.from()</code> method animates
          elements from a new state to their current state.
        </p>
  
        <p className="mt-5 text-gray-500">
          Read more about the{" "}
          <a
            href="https://greensock.com/docs/v3/GSAP/gsap.to()"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            gsap.to()
          </a>{" "}
          method.
        </p>
  
        <div className="mt-20">
          <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
        </div>
      </main>
    );
  };
  
  export default GsapTo;