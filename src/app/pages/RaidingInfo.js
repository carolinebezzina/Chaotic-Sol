import React, { Component } from 'react'

export class RaidingInfo extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Raiding Info </h3>
        </div>
        <div className="row">
          <div className="col-md-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                  <p>The following guidelines are to ensure raiding expectations are transparent from the beginning and fair treatment for all.</p>

                  <h4>Raid Levels</h4>
                  <p>We aim to progress through Normal and then move onto Higher versions of the current content. 
                  <br />Our Normal raids are relaxed and fun events. We typically do not have ilvl or other requirements to join. If you are looking to experience current end-game content without higher demands, this is where you should be. We will help you learn the encounters with us, but we always appreciate a little review on your part before you attend, if at all possible. We will also use a Normal run to assess your suitability for our Higher level raiding, if that is your goal.</p>

                  <p>Our Higher level raiding (Heroic / Mythic) have stricter standards to meet: ilvl requirements/legendries when applicable and performance evaluation. We also expect that any Higher level raiders be open and flexible to working with each other and Raid Leaders to improve on performance/rotations etc. While Chaotic Sol always aim to be inclusive, and encourage you to play what you want, we ask that you respect that as a progression raiding group, our Higher level raiders rely heavily on every member contributing equally to the progress, and that spaces/roles are limited.</p>

                  <h4>Scheduling and Attendance</h4>
                  
                  <p>Sign ups in Discord.</p>
                  <p>Thursdays and Saturdays 8pm – 11pm server time. Occasionally runs may be scheduled on another day on an ad-hoc basis, depending on interest and availability.</p>

                  <p>3 hours maximum raid time, unless voted to extend by raid.
                  <br />There is an expectation of consistent attendance should you commit to Higher level raiding.</p>
                  
                  <ul>
                  <li>Breaks will be taken roughly on the hour for ~5-10 minutes.</li>

                  <li>We do strongly request that you sign up to the events created in the relevant scheduling channel. Advance information regarding attendance gives Raid Leads time to plan. 
                  <br />If your plans change, please either amend your sign up (eg change from attending to late if you will be late) or do your best to speak to an Officer prior. All of our Officers are available on Discord, even when not in game. We understand that life happens and comes first!!</li>

                  <li>Discord is our primary source of communication during raid – We do not expect you to speak to us, but you should be able to listen at the very least. Please speak to an Officer ahead of time if this is an issue for you.</li>
                  </ul>

                  <h4>Loot Rules</h4>
                  <p>When items are put up for rolls, the following guidelines will be followed:</p>

                  <p>Main Spec rolls will be called for first. Highest roll wins, unless that person has already won on a previous roll within that raid and particular lockout (fairness rule). In this case, the item will go to the next highest eligible roll.</p>

                  <p>Legendary items are excluded from the fairness rule - you may Main Spec roll regardless of having already won a roll during that raid/lockout. This also applies for mounts, pets, vanity items/toys should they be eligible for rolls.</p>

                  <p>If no Main Spec rolls have been presented, the item will then become available for Off Spec rolls, with the same fairness rule applying.</p>
                  
                  <h4>Etiquette</h4>
                  <ul>
                    <li>If you experience disconnection/power outage – please do your best to connect and provide ETA (Discord on cell can help with this). We will allow 10 minutes for you to return.</li>
                    <li>Respect the time of the other raiders in the group – pay attention to explanations and come prepared to raid – hearthing to make changes you forgot wastes everyone’s time.</li>
                    <li>Raid members are welcome to make call outs during encounters if it seems like Raid Leads are going to miss it, but as a general rule please allow Raid Leads to handle this, and refrain from chatter/banter during encounters and explanations.</li>
                    <li>Important raid features (Battle Rez / Heroism / Interrupts) will be directed by Raid Leaders. If you are not included in any special direction, please allow the designated person to do so.</li>
                    <li>We will do our best to have consumables available, however these depend entirely on availability. Please endeavour to bring your own to Normal Raiding, and ensure you do so for Higher level raiding.</li>
                    <li>Limit use of Toys/Cosmetic effects during raid.</li>
                    <li>Conduct yourself with dignity – refrain from disrespectful comments. Raging will not be tolerated. Bragging/flexing is discouraged, and comments regarding another’s performance (good or bad) is not necessary. If you have concerns, raise them privately with Raid Lead.</li>
                    <li>Do not post meters in chat – we will do our very best to provide logs at the end of the raid. These are posted in Discord.</li>
                    <li>Any mistakes or corrections needing to be addressed with be done so by Raid Lead/Officers in PRIVATE.</li>
                  </ul>

                  <h4>Consequenses</h4>
                  <p>There is an expectation that if you sign up for raids and make an commitment to be part of the team, that you will be held to your attendance.</p>
                  <p>If you indicate that you will be attending, and then don't show with no reasonable attempt to communicate to an Officer beforehand, Raid Leaders will reach out and connect.</p>
                  <p>Should it be reasonable based on circumstances, a warning will be issued. Should these occurrences continue, you will be removed from the raid roster until further notice.</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 grid-margin stretch-card">
            <div className="card transparent">
              <img className="rounded" src={require('../../assets/images/WoWScrnShot_021222_202150.jpg')} style={{maxWidth: "100%"}} />
              <br />
              <img className="rounded" src={require('../../assets/images/WoWScrnShot_122821_204756.jpg')} style={{maxWidth: "100%"}} />
              <br />
              <img className="rounded" src={require('../../assets/images/WoWScrnShot_021922_192737.jpg')} style={{maxWidth: "100%"}} />
              <br />
              <img className="rounded" src={require('../../assets/images/WoWScrnShot_122821_214152.jpg')} style={{maxWidth: "100%"}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RaidingInfo
