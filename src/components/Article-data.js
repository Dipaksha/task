import React, {useState,useEffect} from 'react';


const buttonStyle={
    color: "white",
    padding: "15px 40px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "16px",
    margin: "40px 5px",
    cursor: "pointer",
    backgroundColor: "#6b6bb7",
    borderRadius: "5%",
    borderColor: "transparent"
}
function Article(){
    const [articlesData, setArticlesData] = useState([]);
    const BASE_URL = 'https://run.mocky.io/v3/99da4b92-4c70-4c5e-ac01-17dd4c1649d2';
    const [isLoading, setIsLoading] = useState(false);
    const [isDoing, setIsDoing] = useState(false);
    
    useEffect(() => {
        console.log(articlesData);
        fetchData();
        
    },[]);
    
    const fetchData = () => {
        setIsLoading(true)
        fetch((`${BASE_URL}`))
            .then( (response) => response.json())

            .then( (jsonData) => {
                setIsLoading(false)
                setArticlesData(jsonData.data)
            })
            
            .catch((error)=>{
                setIsLoading(false)
            })
    }

    const onClickButton = () => {
        setIsDoing(!isDoing);
    }

    return (
        <div>
            <>
                <Button title='Doing' onPress={onClick}></Button>
                <Button title='Waiting' onPress={onClick}></Button>
            </>
            {isDoing == true &&
                articlesData.map((item,index) =>(
                    item.status === 'doing' && 
                    <>
                        {isDoing === true && 
                            <>
                                <li>{item.title}</li>
                                <li>{item.description}</li>
                            </>
                        }
                    </>
                ))
            }
            {isDoing == false &&
                articlesData.map((item,index) =>(
                    item.status === 'waiting' && 
                    <>
                        {isDoing === true && 
                            <>
                                <li>{item.title}</li>
                                <li>{item.description}</li>
                            </>
                        }
                    </>
                ))
            }

        </div>
    )
}

export default Article;