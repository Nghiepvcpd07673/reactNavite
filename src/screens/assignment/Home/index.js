import { useState } from "react"
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../../component/Header/indext";
import CategoryBox from "../../../component/CategoryBox";

const Home = () =>{
    const [keyword, setKeyword] = useState(false);
    const renderCategoryItem = ({item,index})=>{
        return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>
    }
    return(
        <SafeAreaView>
            <Header 
            showSearch
            onSearch={setKeyword}
            keyword={keyword}
            tile="Find All You Need"/>
         <ScrollView>
            <Text style ={styles.container}>
                Home
            </Text>
        </ScrollView>
        </SafeAreaView>
       
    )
}
export default React.memo(Home);