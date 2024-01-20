import Hero from "./components/Hero";
import Phone from "./components/Phone";
import Messages from "./components/Messages";
import Stickers from "./components/Stickers";
import FaceTime from "./components/FaceTime";
import Basiccomponent from "./components/Basiccomponent";
import StandBy from "./components/StandBy";
import Interactive_Widgets_images from "./images/Interactive_Widgets-images.jpg"
import Basiccomponentcol1 from "./components/Basiccomponentcol1";
import namedrop from "./images/namedrop.jpg"
import Basiccomponentcol2 from "./components/Basiccomponentcol2";
import share_content from "./images/share_content.jpg"

import shareplay from "./images/shareplay.jpg"
import suggestions_screen from "./images/suggestions_screen.png"
import privacy_lock from "./images/privacy_lock.png"
import autocorrect from "./images/autocorrect.png"
import predictions from "./images/predictions.jpg"
import profiles from "./images/profiles.jpg"
import search_screen_web from "./images/search_screen_web.png"
import privacy_endframe from "./images/privacy_endframe.jpg"
import autofill_ui from "./images/autofill_ui.png"
import passkey_sharing from "./images/passkey_sharing.png"
import playlist_screen from "./images/playlist_screen.png"
import device from "./images/device.png"
import mute_startframe from "./images/mute_startframe.jpg"
import switchairpods from "./images/switchairpods.png"

import offline_maps from "./images/offline_maps.png"
import shortcuts_screen from "./images/shortcuts_screen.png"
import rich_visuals from "./images/rich_visuals.png"
import health_screen from "./images/health_screen.png"
import safety_screen from "./images/safety_screen.png"
import sensitive_media from "./images/sensitive_media.jpg"
import privacy_lock__large from "./images/privacy_lock__large.png"
import lockdown_mode from "./images/lockdown_mode.jpg"
import Basiccomponentcol2Group from "./components/Basiccomponentcol2Group";
import Moremore from "./components/Moremore"
import Footer from "./components/Footer";
import Fulllist from "./components/Fulllist";
import ios17 from "./images/ios17.jpg"
import developers from "./images/developers.png"
import ipados17 from "./images/ipados17.jpg"


function App() {
  return (
    <div className="App">
      <Hero />
      <Phone />
      <Messages />

      <Stickers />

      <FaceTime />
      <StandBy />

      <div className="InteractiveWidgetsInteractiveWidgets">
        <Basiccomponent
          componentclassName="InteractiveWidgets"
          header="Interactive Widgets"
          sectiononeh5="Take action with just a tap"
          sectiononeh1="Play music, turn off the lights, and more. Right from a widget."
          sectiononeimg={Interactive_Widgets_images} />
      </div>



      <div className="AirDropAirDrop" >
        <Basiccomponentcol1
          componentclassName="AirDrop"
          sectionclassName="AirDropSectionone"
          header="AirDrop"
          sectiononeh5="Swap numbers with NameDrop"
          sectiononeh1="Hold your iPhone near someone else’s iPhone or Apple Watch3 to use NameDrop. You’ll both be able to choose the specific phone numbers or email addresses you want to share, and you can share them along with your Contact Poster instantly."
          sectiononeimg={namedrop} />



        <Basiccomponentcol2Group
          componentclassName="AirDrop"
          header=""


          cardoneh5="Share with intention"
          cardonep="There’s a new way to share with those nearby. Simply bring your phones close together to initiate the transfer over AirDrop"
          cardoneimage={share_content}

          cardtwoimage=""
          cardtwoh5="Finish sending transfers over the internet"
          cardtwop="AirDrop transfers continue even if you step away."
          cardtwoimagetwo=""


        />

        <Basiccomponent
          componentclassName="AirDrop"
          header=" "
          sectiononeh5="Initiate SharePlay "
          sectiononeh1="Hold two iPhone devices close together to instantly start a SharePlay session."
          sectiononeimg={shareplay}
        />

      </div>

      <div className="JournalJournal">
        <Basiccomponent
          componentclassName="Journal"
          sectionclassName="JournalSectionone"
          header="Journal"
          sectiononeh5="A new app to write and remember  "
          sectiononeh1="An all-new way to appreciate life’s moments and preserve your memories."
          sectiononeimg={suggestions_screen} />


        <Basiccomponentcol2Group
          componentclassName="Journal"
          header=""


          cardoneh5="Journaling suggestions personalized for you"
          cardonep="Using on-device machine learning, your iPhone creates personalized suggestions of moments for you to remember and write about based on your photos, music, workouts, and more."
          cardoneimage={suggestions_screen}

          cardtwoimage={privacy_lock}
          cardtwoh5="Your journal is your"
          cardtwop="No one but you can access your journal."
          cardtwoimagetwo=""


        />



      </div>









      <div className="KeyboardKeyboard">



        <Basiccomponentcol2Group
          componentclassName="Keyboard"
          header="Keyboard"


          cardoneh5="Even more accurate autocorrect4"
          cardonep="Autocorrect delivers even better support as you type. Autocorrected words are temporarily underlined so you know what’s been changed and you can revert back to the original word with just a tap."
          cardoneimage={autocorrect}

          cardtwoimage=""
          cardtwoh5="Predictions inline as you typ"
          cardtwop=""
          cardtwoimagetwo={predictions}


        />


      </div>



      <div className="Safari&Passwords" >
        <Basiccomponentcol1
          componentclassName="SafariPasswords"
          sectionclassName="SafariPasswordsSectionone"
          header="Safari and Passwords"
          sectiononeh5="Create a profile"
          sectiononeh1="Keep your browsing separate for topics like Work and Personal with different profiles in Safari. Profiles help you separate your history, extensions, Tab Groups, cookies, and favorites. You can quickly switch between profiles as you browse."
          sectiononeimg={profiles} />



        <Basiccomponentcol2Group
          componentclassName="SafariPasswords Safaricolwidth"
          header=""


          cardoneh5="Faster and more relevant search"
          cardonep="Search in Safari is more responsive than ever and shows easier-to-read and more relevant suggestions."
          cardoneimage={search_screen_web}

          cardtwoimage=""
          cardtwoh5="Enhanced Private Browsing"
          cardtwop="Private Browsing now locks your private browsing windows when you’re not using them, completely blocks known trackers from loading on pages, and removes tracking added to URLs as you browse.          "
          cardtwoimagetwo={privacy_endframe}


        />



        <Basiccomponentcol2Group
          componentclassName="SafariPasswordsbg"
          header=""


          cardoneh5="Autofill verification codes received in Mail          "
          cardonep="One-time verification codes you receive in Mail are filled in automatically, so you can log in without leaving Safari.          "
          cardoneimage={autofill_ui}

          cardtwoimage={passkey_sharing}
          cardtwoh5="Password and passkey sharing          "
          cardtwop="Share a set of passwords with your trusted contacts.          "
          cardtwoimagetwo=""


        />






      </div>



      <div className="MusicMusic" >
        <Basiccomponentcol1
          componentclassName="Music"
          sectionclassName=""
          header="Music"
          sectiononeh5="Collaborate on playlists"
          sectiononeh1="Invite friends to join your playlist and everyone can add, reorder, and remove songs. Use emoji to react to the song choices in Now Playing.          "
          sectiononeimg={playlist_screen} />












      </div>


      <div className="AIRPLAY">
        <Basiccomponentcol2Group
          componentclassName="Airplay"
          header="AirPlay"


          cardoneh5="Smart device suggestions          "
          cardonep="On-device intelligence learns your AirPlay  preferences over time. "
          cardoneimage={device}

          cardtwoimag=""
          cardtwoh5="AirPlay in your hotel room          "
          cardtwop="Soon, AirPlay will be available in supporting hotel rooms. Scan the QR code on your room TV and you can securely share videos, photos, and music from your iPhone to the TV.          "
          cardtwoimagetwo=""


        />
      </div>


      <div className="AirPodsAirPods">

        <Basiccomponentcol1
          componentclassName="AirPods"
          sectionclassName="AirPodsSection"
          header="AirPods"
          sectiononeh5="Adaptive Audio"
          sectiononeh1="With an entirely new listening mode for AirPods Pro (2nd generation), Adaptive Audio dynamically blends Transparency and Active Noise Cancellation to tailor the noise control experience as you move between changing environments and interactions throughout the day.6          "
          sectiononeimg="{playlist_screen}" />


        <Basiccomponentcol2Group
          componentclassName="AirPods"
          header=""


          cardoneh5="Press to mute and unmute"
          cardonep="Quickly mute or unmute yourself on a call."
          cardoneimage={mute_startframe}

          cardtwoimag=""
          cardtwoh5="Switch devices without missing a beat          "
          cardtwop="Updates to Automatic Switching make moving between Apple devices with AirPods even easier, faster, and more reliable.8          "
          cardtwoimagetwo={switchairpods}


        />




      </div>


      <div className="MapsMaps">

        <Basiccomponentcol1
          componentclassName="Maps"
          sectionclassName="Mapssection"
          header="Maps"
          sectiononeh5="Download maps to use offline          "
          sectiononeh1="Save an area of a map to your phone and explore it while offline. Search and view information like hours and ratings on place cards.          "
          sectiononeimg={offline_maps} />




      </div>


      <div className="SpotlightSpotlight">
        <Basiccomponentcol2Group
          componentclassName="Spotlight"
          header="Spotlight"


          cardoneh5="App Shortcuts in Top Hit          "
          cardonep="When you search for an app, Spotlight intelligently offers you app shortcuts to your next action within the Top Hit. So if you search for Photos, you can jump right to the Favorites album.          "
          cardoneimage={shortcuts_screen}

          cardtwoimage={rich_visuals}
          cardtwoh5="Rich visual results          "
          cardtwop="Find what you’re looking for faster with familiar app colors and icons in search results.   "
          cardtwoimagetwo=""


        />
      </div>


      <div className="HealthHealth ">
        <Basiccomponent
          componentclassName="Health "
          sectionclassName="HealthAppSectionone"
          header="Health App          "
          sectiononeh5="New ways to put your health first          "
          sectiononeh1="New mental health and vision health features provide powerful insights."
          sectiononeimg={health_screen} />





      </div>

      <div className="PrivacyPrivacy ">
        <Basiccomponentcol2Group
          componentclassName="Privacy "
          header="Privacy and Security          "


          cardoneh5="Communication Safety          "
          cardonep="Communication Safety now includes protections for sensitive videos and photos. And it extends beyond Messages to include content sent and received in AirDrop, the systemwide photo picker, FaceTime messages, Contact Posters in the Phone app, and third‑party apps.          "
          cardoneimage={safety_screen}

          cardtwoimage="{sensitive_media}"
          cardtwoh5="Sensitive Content Warning          "
          cardtwop="You now have the option to blur sensitive photos and videos before you choose to view them. This feature will be available in Messages, AirDrop, Contact Posters in the Phone app, FaceTime messages, and third‑party apps.  "
          cardtwoimagetwo={sensitive_media}


        />


        <Basiccomponentcol2Group
          componentclassName="Privacy2 "
          header="          "


          cardoneh5="Improved permissions          "
          cardonep="Even more control over what you share.          "
          cardoneimage={privacy_lock__large}

          cardtwoimage=""
          cardtwoh5="Lockdown Mode          "
          cardtwop="The expanded Lockdown Mode increases security to help protect against sophisticated cyber attacks. Turn it on across all your Apple devices, now including Apple Watch.          "
          cardtwoimagetwo={lockdown_mode}


        />
      </div>




      <Moremore />

      <Fulllist />
      <div className="UpdateUpdate ">
        <Basiccomponentcol2Group
          componentclassName="Update "
          header="        "


          cardoneh5=" "
          cardonep="See how to update to iOS 17.          "
          cardoneimage={ios17}

          cardtwoimage={developers}
          cardtwoh5="        "
          cardtwop="Developers will
          love iOS, too.  "
          cardtwoimagetwo="{developers}"


        />





      </div>


      <div className="IpadosIpados">

        <Basiccomponentcol1
          componentclassName="Ipados"
          sectionclassName="Ipadossection"
          header=""
          sectiononeh5="iPadOS 17          "
          sectiononeh1="Even more capable. Even more you.          "
          sectiononeimg={ipados17} />




      </div>
      <Footer />
    </div>

  );
}

export default App;
