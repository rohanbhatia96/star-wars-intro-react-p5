import React, { useEffect } from "react";
import * as p5 from "p5";
import Sound from "react-sound";

const StarWarsSketch = props => {
  const Sketch = p5 => {
    let textFont;
    let titleFont;
    let textX;
    let textY;
    let titleSize;
    let textAlpha;
    p5.preload = () => {
      textFont = p5.loadFont("./Starjedi.ttf");
      titleFont = p5.loadFont("./Starjhol.ttf");
    };
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
      p5.background(0);
      textX = -p5.width / 2 + p5.width * 0.15;
      textY = p5.height / 2;
      titleSize = p5.width / 3;
      textAlpha = 255;
    };

    p5.draw = () => {
      p5.background(0);
      p5.textFont(titleFont);
      p5.fill(255, 232, 31);
      p5.textSize(titleSize);
      p5.textAlign(p5.CENTER);
      p5.textLeading(titleSize);
      p5.text(props.titleText, 0, 0);
      if (titleSize < p5.width / 10) {
        p5.fill(255, 232, 31, textAlpha);
        p5.textFont(textFont);
        p5.textSize(p5.width / 30);
        p5.textAlign(p5.CENTER);
        p5.rotateX(p5.PI / 4);
        p5.textLeading(p5.width / 30);
        p5.text(
          props.summaryText,
          textX,
          textY,
          p5.width * 0.7,
          p5.height * 10
        );
        textY -= 1.5;
        if (textY < -p5.width / 1.7) {
          textAlpha -= 0.5;
        }
      }
      if (titleSize > 0) {
        titleSize--;
      }
    };
  };

  useEffect(() => {
    new p5(Sketch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Sound
        url="star-wars-intro-music.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={0}
      />
    </div>
  );
};

export default StarWarsSketch;
