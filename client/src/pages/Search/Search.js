import React, { Component } from "react";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, Header, FormBtn } from "../../components/Form";


class Articles extends Component {
  state = {
    savedarticles: [],
    articles: [],
    topic: "",
    startYear: "",
    endYear: "",
    header: "SEARCH"
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    console.log("loading articles");
    API.getArticles()
      .then(res => {
        this.setState({ savedarticles: res.data})
        console.log(this.state.savedarticles)        
      }
        
        // this.setState({ articles: res.data, topic: "", startYear: "", endYear: "" })
      )
      .catch(err => console.log(err));
    console.log(this.state.savedarticles)
  };

  saveArticle = id => {
    let articleData = this.state.articles.filter(art => art._id === id);

    console.log(articleData[0].headline.main, articleData[0].pub_date, articleData[0].web_url);

    API.saveArticle({
      title: articleData[0].headline.main,
      date: articleData[0].pub_date,
      url: articleData[0].web_url
    }).then(res => this.loadArticles()) //doesn't need id
      .catch(err => console.log(err));

  };

  removeArticle = id => {
    // let articleData = this.state.articles.filter(art => art._id === id);

    console.log(`the id is :${id}`);

    API.deleteArticle(id).then(res => this.loadArticles()).catch(err => console.log(err));

  };


  handleInputChange = event => {
    // console.log(event);
    // console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startYear) {
      API.searchArticles(
        `&q=${this.state.topic}&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}0101`
      )
        .then(res => {
          // console.log(res.data)
          // console.log(res.data.response.docs[0].headline.main)
          this.setState({ 
            articles: res.data.response.docs,
          })
        })
        .catch(err => console.log(err))
    }
  };

  render() {
    return (
      <Container fluid>
        <Row fluid>
          <Col >
            <form>
              <Header hdr="SEARCH"/>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="Start Year (required)"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="End Year (Optional)"
              />
              <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col >
          <Header hdr="SCRUBBED"/>
             {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => {
                  return (
                  <ListItem 
                    key={article._id}
                    title={article.headline.main}
                    date={article.pub_date}
                    href={article.web_url}
                  >
                  <SaveBtn onClick={() => this.saveArticle(article._id)} btnhdr="SAVE"/>
                  </ListItem>
                  )
                })}
              </List>
              // <h3>Yes we have results</h3>
             ) : (
               <h3>No Results to Display</h3>
             )}
          </Col>
        </Row>
        <Row>
          <Col >
          <Header hdr="SAVED"/>
             {this.state.savedarticles.length ? (
              <List>
                {this.state.savedarticles.map(svarticle => {
                  return (
                  <ListItem 
                    key={svarticle._id}
                    title={svarticle.title}
                    date={svarticle.date}
                    href={svarticle.url}
                  >
                  <SaveBtn onClick={() => this.removeArticle(svarticle._id)} btnhdr="DELETE"/>
                  </ListItem>
                  )
                })}
              </List>
              // <h3>Yes we have results</h3>
             ) : (
               <h3>No Results to Display</h3>
             )}
          </Col>
        </Row>
      </Container>          

    );
  }
}

export default Articles;
