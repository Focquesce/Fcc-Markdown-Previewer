//jQuery
$(document).ready(function() {
  $("body").css("background-color", "slateblue");
  $(".preview").css("background-color", "#aef");
  $("textarea, .preview").css("min-height", "420px");
  $(".preview img").css("max-width", "100%");
});

//React
const placeholder = `# This is a heading: React, Redux, and Silq all look the same! 
## This is a sub-heading: Some random scheite outside of that as well...
### More headings.........
#### Still going............
##### Did you know that the scientific name for the great horned owl is bubo virginianus? Sounds funny right? ...right...? am i the only one
###### Aight this is the end of it, nice talkin to ya! See you around mate, peace
Bahyelabageh
**ono**
_Pamplemousse_
Are you of the ~~way~~ wei of the **_Jing ~~Wei~~ way_** .?
> owo uwu owo ![:pogChamp:]("")
- a list with a single item... yeah shut up i know 
[Do people even fall for these anymore](https://en.wikipedia.org/wiki/Nothing)
Inline btw \`<small>pypiy</small> \`
\`\`\`
Block of Code:
x = 2x
x ÷ x = 2x ÷ x
1 = 2
I just proved that 1 = 2. This is why you don't divide by zero. 
\`\`\`
![Silq](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Silq_Programming_Language_Logo.svg/1920px-Silq_Programming_Language_Logo.svg.png)
![React](https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png)
![Redux](https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png) 
I don't see the difference | Because I can't see`;

class App extends React.Component {
    state = {
      log: placeholder
    };
  handleChange = (e) => {
    this.setState({
      log: e.target.value
    });
  }; 
  
  render() {
    const { log } = this.state;
    
    const markdown = marked(log, { breaks: true });
    
    return (
      <div>
        <h2 className="text-center" id="V">Markdown Converter</h2>
        <div className="col">
          <div className="col-6">
            <h5 className="text-center" id="X">Log n' Convert</h5>
            <textarea className="form-control" id="editor" value={log} onChange={this.handleChange}/>
          </div>
          <div className="col-6">
            <h5 className="text-center" id="A">Contemplate the Result</h5>
            <div className="preview rounded" dangerouslySetInnerHTML={{__html: markdown}} id="preview"/>
          </div>
        </div>
      </div>
    ); 
  };
};

ReactDOM.render(<App/>, document.getElementById("app"));
