import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Carrinho } from '../screens/Carrinho';
import { Perfil } from '../screens/Perfil';

import HomeIcon from "../assets/icons/HomeIcon.png";
import PedidoIcon from "../assets/icons/PedidoIcon.png";
import PerfilIcon from "../assets/icons/PerfilIcon.png";
import SearchIcon from "../assets/icons/SearchIcon.png";



const Tab = createBottomTabNavigator<ListaParametrosRotasTab>();

export type ListaParametrosRotasTab ={
    Homes: undefined;
    Carrinho: undefined;
    Perfil: undefined;


}


export const Routes = () => {

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {backgroundColor: "white", paddingBottom: 2},
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'grey',
                    tabBarShowLabel: false
                }}
            >
                <Tab.Screen
                    name="Homes"
                    component={Home}
                    options={{
                        tabBarIcon: ({color}) => {
                            return <Image
                                resizeMode='contain'
                                style={{width:30, tintColor: color}}
                                source={HomeIcon}
                            />
                        }
                    }}
                    />
                
                <Tab.Screen
                    name="Carrinho"
                    component={Carrinho}
                    options={{
                        tabBarIcon: ({color}) => {
                            return <Image
                                resizeMode='contain'
                                style={{width:30, tintColor: color}}
                                source={PedidoIcon}
                            />
                        }
                    }}
                    />
                <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: ({color}) => {
                            return <Image
                                resizeMode='contain'
                                style={{width:30, tintColor: color}}
                                source={PerfilIcon}
                            />
                        }
                    }}
                    />
                
            </Tab.Navigator>
        </>
    );
}