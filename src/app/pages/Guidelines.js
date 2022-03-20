import React, { Component } from 'react'

export class Guidelines extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Guild Guidelines </h3>
        </div>
        <div className="row">
          <div className="col-md-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <p><strong>Chaotic Sol</strong> aims to be a fun and welcoming home and community. We are inclusive of all types of players, but consider ourselves primarily a casual guild. Our guild is a safe space, and we do not tolerate abusive or disrespectful behaviour in any capacity.</p>

                <p>We understand that everyone plays for different reasons and with different goals. Be respectful of the different contributions we all bring to our community.</p>

                <p>We expect you to conduct yourself with dignity in the broader WoW community – Remember that you are a representative of our Guild and it’s values, and that outsiders will make judgements on our Guild based on what you project. Drama of any kind is not welcome. We do not expect everyone to get along, but we do expect civility. Misunderstandings are bound to happen. Be open to talking about issues when our Officers reach out to assist, or be prepared to take your drama elsewhere. We are firm on this. This game is an escape for many and we will work to make sure you’re all comfortable with us.</p>

                <p>Discord is our primary source of information, communication, and scheduling. We strongly encourage you to join us! We don’t require you to talk, but we do want you to feel you are a part of our community, so please give us the opportunity to welcome you.</p>

                <p>Our Discord is available for use by our guild members. Community members are welcome when playing with our guild members. Pease consult with an Officer before you invite people to the server. Guests will be removed periodically in order to protect our community.</p>

                <p>We have dedicated Officers you can always reach out to for help and assistance. These people volunteer their time to help our guild grow and aim to always be available to help our members. Please do not hesitate to reach out if you need help or have questions.</p>

                <p>While we identify as a casual guild, we do aim to do our best to provide a variety of events and opportunities for our members, such as raiding/dungeons, PvP, achievement and other fun events. Keep an eye to our various Discord Scheduling channels for these, contribute your own ideas if you have them, and participate as much as you can/want to. We’re all here because of each other. Let's have fun and continue to build Chaotic Sol together!</p>

                <img className="rounded" src={require('../../assets/images/WoWScrnShot_072121_191721.jpg')} style={{maxWidth: "100%"}} />
                
              </div>
            </div>
          </div>
          <div className="col-md-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4>Ranks</h4>
                  <br />
                  <h5>Initiate</h5>
                  <p>Initiate is the rank that you will be assigned when you first join the guild. As an initiate you are able to join the discussion in guild chat, view the guild bank, and have access to some guild repair funds.
                  In some cases, initiate is the rank that you will be returned to after spending some time away from the game (we currently don't kick members for inactivity).</p>

                  <h5>Member</h5>
                  <p>Our members have been with the guild for at least a week. Members have shown some sort of interaction with the guild, whether it be socialising in guild chat, grouping up with other members, contributing to the guild bank, or even just hanging out in discord. Members have additional guild repair funds, and can withdraw from some guild bank tabs.</p>

                  <h5>Veteran</h5>
                  <p>Veterans have shown consistent participation in guild activities. They have attended multiple normal raid nights, assisted other guild members on multiple occasions and/or contributed to the guild bank regularly. Veterans have additional guild repair funds, and have greater access to the guild bank.</p>

                  <h5>Vanguard</h5>
                  <p>The vanguards of the guild have been with us a for while. They are trusted guild members who have proven themselves to be reliable and consistently practiced the core values of the guild. Most of our vanguards are part of our heroic raid team. They have additional guild repair funds and even greater access to the guild bank. If an officer role is available, a new officer will be selected from the vanguards of the guild.</p>
                  
                  <h5>Council</h5>
                  <p>The council consists of your friendly guild officers. Each of them have a role in helping the guild run smoothly and are here to help each and every guild member have fun, and feel at home here at Chaotic Sol. All officers are able to invite members to the guild, so if you have friends or alts you want added to the guild, feel free to get in touch with any of the officers.</p>

                  <h5>Alt</h5>
                  <p>If you are not an officer, this is where all your alts will be allocated (regardless of rank). They have some guild repair funds.</p>

                  <h5>Officer Alts</h5>
                  <p>This is the rank for all the alts of our guild officers. This rank also has guild invite permissions so feel free to message them for an invite if you see them online.</p>

                  <h5>Inactive</h5>
                  <p>If you have been away from the game for more than a month, your characters will be moved to the inactive rank. At this rank you will not be able to use the guild bank or have any guild repair funds (but you're not in-game, so you probably won't notice 😛).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Guidelines
