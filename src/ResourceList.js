import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResource] = useState([])

  const fetchReseource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    setResource(response.data)
  }

  useEffect(() => {
    fetchReseource(resource)
  }, [resource])

  return resources
}

const ResourceList = ({ resource }) => {
  const resources = useResources(resource)

  return (
    <div>
      {resources.map(record => <li key={record.id}>{record.title}</li>)}
    </div>
    )
}
 
export default ResourceList