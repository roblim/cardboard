html: `<p>${this.props.card.description}</p>`

handleChange(event) {
  this.setState({html: event.target.value})
}

<div className="card-detail-description">
  <ContentEditable
    html={this.state.html}
    disabled={false}
    onChange={this.handleChange}
    />
</div>
