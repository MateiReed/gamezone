"use client";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const achievementsList = [
  {
    metric: "Jocuri",
    value: "200",
    postfix: "+",
  },
  {
    metric: "Calculatoare si Console",
    value: "15",
  },
  {
    metric: "Ani de experienta",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Personal",
    value: "6",
    postfix: "",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-8 sm:py-6 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-4 px-8 flex flex-col sm:flex-row  justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-purple-600 text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                      duration: 2000, // Animation duration in milliseconds
                      easing: (t) => t * t, // Custom easing function
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;