/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Linking } from 'react-native';

export default function useFeed() {

  const words = [
    "ansiedad",
    "depresion",
    "atencion",
    "emociones",
    "sueño",
    "dolor",
    "felicidad",
    "tristeza",
    "ira",
  ]

  const [keywords, setKeywords] = React.useState(["psicologia"]);
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);


  async function getDocuments() {
    setLoading(true);
    try {
      const response = await fetch(`https://sana-mente-api.herokuapp.com/api/documents/${keywords.join(',')}`);
      const result = await response.json();
      console.log("result", result);
      setResults(result)
      setLoading(false)
    } catch (error) {
      setError(error.message);
      setLoading(false)
    }
  }

  function handlePress (word){
    if (keywords.includes(word)){
      let temp = keywords.slice()
      temp = keywords.filter(keyword => keyword !== word);
      setKeywords(temp);
    }else{
      setKeywords([...keywords, word]);
    }
  }

  function handleGoToLink(link){
    Linking.openURL(link);
  }

  React.useEffect(() => {
    getDocuments();
  }, [keywords]);

  return {
    keywords,
    setKeywords,
    results,
    loading,
    error,
    modalVisible,
    setModalVisible,
    words,
    handlePress,
    handleGoToLink
  }
}