import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin)

const GsapText = () => {
    // TODO: Implement gsap text animation

    useGSAP( () => {
      gsap.to('#text', {
        duration: 2,
        opacity: 1,
        ease: 'power2',
        y: 0
      })

      gsap.fromTo('.para', {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 1,
        delay: 0.5,
        stagger: 0.3
      })
    }, [])
    
  
    return (
      <main>
        <h1 id="text" className="opacity-0 translate-y-10 font-bold text-4xl">
          GsapText
        </h1>
  
        <p className="mt-5 text-gray-500 para">
          We can use same method like <code>gsap.to()</code>,{" "}
          <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
          <code>gsap.timeline()</code> to animate text.
        </p>
  
        <p className="mt-5 text-gray-500 para">
          Using these methods we can achieve various text animations and effects
          like fade in, fade out, slide in, slide out, and many more.
        </p>
  
        <p className="mt-5 text-gray-500 para">
          For more advanced text animations and effects, you can explore the GSAP
          TextPlugin or other third-party libraries that specialize in text
          animations.
        </p>
  
        <p className="mt-5 text-gray-500 para">
          Read more about the{" "}
          <a
            href="https://greensock.com/docs/v3/Plugins/TextPlugin"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            TextPlugin
          </a>{" "}
          plugin.
        </p>
      </main>
    );
  };
  
  export default GsapText;