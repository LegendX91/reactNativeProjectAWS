import React, { useEffect, useState} from 'react';
import { View, FlatList } from 'react-native';
import Post from '../../components/Post';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';
import { useRoute } from '@react-navigation/native';

const SearchResultsPage = (props) => {

    const [feed, setFeed] = useState([]);
    const route = useRoute();

    const fetchPosts = async () => {
        try {
            const postsResult = await API.graphql(
                graphqlOperation(listPosts)
            )
            setFeed(postsResult.data.listPosts.items);
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <View>
            <FlatList 
                data={feed}
                renderItem={({item}) => <Post post={item} />}
            />
        </View>
    )
}

export default SearchResultsPage;