import React from 'react';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descript: "Ajouter comme ami(e)"
    };
  }
  render() {
    return (
      <div>
        <img src="public/logo512.png" alt="Cover image"/>
        <img src="/home/angelo/my-app/public/monpdp.jpg" className="profil_picture"/>
        <button onClick={() => this.setState({ descript: "Invitation envoyée" })}>
          {this.state.descript}
        </button>
      </div>
    );
  }
}

export default CardComponent;
