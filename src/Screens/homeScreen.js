import { StatusBar, StyleSheet, Text, View, NativeModules, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import ProductItem from '../Components/Module/productItem';
import ProductController, { useProduct } from '../Controllers/productController';
import AbstractHeader from '../Components/Abstract/abstractHeader';
import { Colors } from '../theme';
import { navigate } from '../Navigation/mainNavigation';
import AbstractLoader from '../Components/Abstract/abstractLoader';
import { useSelector } from 'react-redux';

const { StatusBarManager } = NativeModules;

const HomeScreen = () => {

    const {allProducts} = useProduct()
    // const cartItems = useSelector((state) => state.cart.cartItems)
    // console.log("=======",allProducts)
    console.log("=======",allProducts.length)



    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor={"transparent"} barStyle={"light-content"} translucent={true} />
            <View style={{ height: StatusBarManager.HEIGHT, backgroundColor: 'orange' }} />


            <AbstractHeader label={"Map Cards"}/>


            <View style={{ flex:1, alignItems: "center",justifyContent:"center" }} >
                { allProducts.length > 0 ?
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={allProducts}
                        // numColumns={2}
                        pagingEnabled
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <ProductItem item={item} />
                            )
                        }}
                        // ListFooterComponent={() => (
                        //     <View style={{ width: "100%", height: 100 }} />
                        // )}
                        // ListHeaderComponent={() => (
                        //     <View style={{ width: '100%', height: 20 }} />
                        // )}
                    />
                    :
                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <View style={{ marginBottom: 200 }}>
                           <AbstractLoader />
                        </View>
                    </View>
                }

            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

})