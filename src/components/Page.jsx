import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPerson, clickGood, clickBad, clearTeam, mixTeam } from '../features/team';
import { GiSnitchQuidditchBall } from "react-icons/gi";
import { FaQuidditch } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import './Page.css';

const Page = () => {
  const dispatch = useDispatch();
  const { PLAYERS, salazarSlytherin, gryffindor, currentTeam, chooseSalazar, chooseGryffindor, info } = useSelector(
    (state) => state.team
  );

  return (
    <div>
      <h1>Welcome to Quidditch <FaQuidditch />
      </h1>
      <h2>{info}<GiSnitchQuidditchBall/></h2>
      <span>
        {PLAYERS.map((persons, index) => (
          <button key={index} onClick={() => dispatch(selectPerson(index))}>
            {persons}
          </button>
        ))}
      </span>
      <div>
        <button
          onClick={() => dispatch(clickGood())}
          className={chooseGryffindor ? 'gryffindor' : ''}
        >
          {chooseGryffindor ? currentTeam : 'Takım Gryffindor'}
        </button>
        <button
          onClick={() => dispatch(clickBad())}
          className={chooseSalazar ? 'slytherin' : ''}
        >
          {chooseSalazar ? currentTeam : 'Takım Salazar Slytherin'}
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(mixTeam())}>Karıştır</button>
        <button onClick={() => dispatch(clearTeam())}>Sıfırla</button>
      </div>

      {/* Takımları yan yana düzenlemek için container */}
      <div className="teams-container">
        <div className="gryffindor-team">
          <h3>Takım Gryffindor</h3>
          {gryffindor.length > 0 && gryffindor.map((goods, index) => <p key={index}>{goods}</p>)}
        </div>
        <div className="slytherin-team">
          <h3>Takım Salazar Slytherin</h3>
          {salazarSlytherin.length > 0 &&
            salazarSlytherin.map((bads, index) => <p key={index}>{bads}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Page;
