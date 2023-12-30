import { useState } from "react";
import { HeadingDefault, HeadingSmall, Toggle } from "../../../components";

export const Notifications = () => {
  const [hasNotifications, set_hasNotifications] = useState(false);
  const [hasEmailMarketing, set_hasEmailMarketing] = useState(false);

  const onNotificationsToggleHandler = () => {
    set_hasNotifications(!hasNotifications);
  };

  const onEmailMarketingToggleHandler = () => {
    set_hasEmailMarketing(!hasEmailMarketing);
  };

  return (
    <>
      <HeadingDefault className="text-center mb-5">Биди во тек</HeadingDefault>
      <p className="text-center text-white mb-10">
        Овозможи нотификации за да останеш во тек со најновите програми
      </p>
      <div className="flex flex-col w-full pb-7 mb-10 border-bottom-light">
        <div className="flex justify-between items-center mb-5">
          <HeadingSmall className="text-center text-white">Push notifications</HeadingSmall>
          <Toggle checked={hasNotifications} onChange={onNotificationsToggleHandler} />
        </div>
        <p className="text-light">
          Ќе бидете известени за најновите случувања во врска со апликацијата
        </p>
      </div>
      <div className="flex flex-col w-full pb-7 mb-10">
        <div className="flex justify-between items-center mb-5">
          <HeadingSmall className="text-center text-white">EMAIL MARKETING</HeadingSmall>
          <Toggle checked={hasEmailMarketing} onChange={onEmailMarketingToggleHandler} />
        </div>
        <p className="text-light">Добијте ексклузивни понуди и слично преку вашиот e-mail</p>
      </div>
    </>
  );
};
