import React from "react";

class AboutU extends React.Component {
  state = {
    status: "",
    about: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const info = {
      ...this.props.info,
      ...this.state
    };
    this.props.updateProfile(this.props.info.uid, info);
  };
  render() {
    if (this.props.info) {
      return (
        <div className="form__wrapper">
          <div className="form">
            <div className="from__container">
              <div className="form__header">Informações do usuário</div>
              <form onSubmit={this.handleSubmit}>
                <div className="form__row mg-tp" onChange={this.handleChange}>
                  <label className="form__label">Status </label>
                  <div className="form__unit check">
                    <input
                      className="form__radio hidden"
                      value="solteiro"
                      type="radio"
                      id="solteiro"
                      name="status"
                      required
                    />
                    <label htmlFor="solteiro" className="form__label-radio">
                      Solteiro
                    </label>
                  </div>
                  <div className="form__unit check">
                    <input
                      className="form__radio hidden"
                      value="casado"
                      type="radio"
                      id="casado"
                      name="status"
                    />
                    <label htmlFor="casado" className="form__label-radio">
                      Casado
                    </label>
                  </div>
                  <div className="form__unit check">
                    <input
                      className="form__radio hidden"
                      value="em um relacionamento"
                      type="radio"
                      id="relationship"
                      name="status"
                    />
                    <label htmlFor="relationship" className="form__label-radio">
                      Em um relacionamento
                    </label>
                  </div>
                </div>

                <div className="from__unit mg-tp">
                  <textarea
                    maxlegnth="200"
                    required
                    className="form__textarea"
                    name="about"
                    value={this.state.about}
                    placeholder="Nos conte um pouco sobre você..."
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <button className="btn btn--contained-link circle mg-none mg-tp">
                  Atualizar perfil
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}
export default AboutU;
