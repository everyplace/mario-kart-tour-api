const fetch = require('node-fetch');
const cheerio = require('cheerio')

exports.mariokart = async (req, res) => {

  let language = req.query.language || 'en-US'
  let cup = req.query.cup || 'allcup'
  let url = `https://mariokarttour.com/${language}/ranking/${cup}`  
  let request = await fetch(url)
    .then((response)=> {return response.text()})
    .catch((e)=>{
      console.log("page fetching error", e)
    });
  
  let $ = cheerio.load(request)
  try{
    let page_rankings = $(".page-ranking");

    let data = page_rankings[0].attribs['data-ranking']

    res.json(JSON.parse(data))  
  } catch(e) {
    res.status(500).json({error:"likely an invalid query"})
  }
}